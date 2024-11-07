import {styles} from './listaorcamento.style'
import icones from '../../constants/icones'
import Header from '../../components/header/header.jsx'
import {View, Text, ScrollView, Image, Alert} from 'react-native'
import Titulo from '../../components/titulo/titulo.jsx'
import {useState, useContext, useEffect} from 'react'
import {AuthContext} from '../../context/Auth.js'
import api from '../../axios-instance.js'
import {ConverteData, ConverteValor, FormatDataDate} from '../../funcoes/funcaoConversao.js'
import Filtrodata from '../../components/filtrodata/Filtrodata.jsx'
import {Button} from '../../components/button/buton.jsx'
import Loading from "../../components/loading/loading"

const Listaorcamento = (props) => {

    const [loading, setLoading] = useState(false)
    const {
        apelido, dataOrcamento, setDataOrcamento, user, datavalida,
        dataInicial, dataFinal, setDatavalida, setDataInicial, setDataFinal
    } = useContext(AuthContext)

    const navigation = props.navigation

    //const data = (new Date().toLocaleString('pt-BR')).substring(0, 10)

    useEffect(() => {
        setDataInicial('')
        setDataFinal('')
        LerOrcamentos()
    }, [])

    const LerOrcamentos = async () => {
        try {
            if (!user.token) {
                Alert.alert('Erro', 'Problemas com o Token de Autenticação...!', [{
                    text: 'OK',
                    onPress: () => navigation.navigate('Home')
                }])
            }
            setLoading(true)
            const response = await api.get(`/orcamentos/`)

            response.data.sort((a, b) => new Date(b.data) - new Date(a.data)) //ordena por data da maior para a menor
            setDataOrcamento(response.data)

        } catch (error) {
            setLoading(false)
            Alert.alert('Erro', 'Não foi possível conectar à API. Verifique sua conexão ou tente mais tarde.', [{
                text: 'OK',
                onPress: () => props.navigation.navigate('Home')
            }])
        } finally {
            setLoading(false)
        }
    }

    const Consulta = async () => {

        try {
            if (!user.token) {
                Alert.alert('Erro', 'Problemas com o Token de Autenticação...!', [{
                    text: 'OK',
                    onPress: () => navigation.navigate('Home')
                }])
            }

            let dataI = dataInicial
            let dataF = dataFinal

            if (dataInicial !== '') {
                dataI = FormatDataDate(dataInicial)
            }

            if (dataFinal !== '') {
                dataF = FormatDataDate(dataFinal)
            }

            setLoading(true)
            const response = await api.get(`/orcamentos/datas`, {
                params: {dataInicial: dataI, dataFinal: dataF}
            })
            response.data.sort((a, b) => new Date(b.data) - new Date(a.data))
            setDataOrcamento(response.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    function Voltar() {
        setDatavalida(true)
    }

    return (
        <>
            {loading && <Loading/>}
            {!datavalida &&
                <View style={styles.boxDataInvalida}>
                    <View style={styles.boxDataModal}>
                        <Text style={styles.texto1}>
                            Atenção.
                        </Text>
                        <Text></Text>
                        <Text style={styles.texto2}>
                            A data digitada não é válida..!
                        </Text>
                        <View style={styles.boxButton}>
                            <Button texto="Voltar" onPress={Voltar}></Button>
                        </View>
                    </View>
                </View>
            }

            <View style={[styles.container, loading && {opacity: 0.9} ] }>
                <Header texto={apelido}/>
                <Titulo titulo={'Orçamentos'} image={icones.orca2} back={icones.back} tela={'Home'}
                        navigation={navigation}/>

                <View style={styles.containerPesquisa}>
                    <Filtrodata onPress={Consulta}></Filtrodata>
                </View>

                <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
                    {dataOrcamento.map((item) => (
                        <View key={item.idOrcamento}>
                            <View style={styles.boxContainer}>

                                <View style={styles.boxNomeImage}>

                                    <View style={styles.boxNome}>
                                        <Text style={styles.texto}>
                                            {item.nome}
                                        </Text>

                                    </View>

                                    <View style={styles.boxImage}>
                                        <Image source={icones.expandir} style={styles.image}/>
                                    </View>
                                </View>

                                <View style={styles.boxDataValor}>

                                    <View style={styles.idOrcamento}>
                                        <Text style={styles.texto}>
                                            Os: {item.idOrcamento}
                                        </Text>
                                    </View>


                                    <View style={styles.boxData}>
                                        <Text style={styles.texto}>
                                            {ConverteData(item.data)}
                                        </Text>
                                    </View>

                                    <View style={styles.boxValor}>
                                        <Text style={styles.texto}>
                                            Total: {ConverteValor(item.vlrTotal)}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>

                <View style={styles.footer}>
                </View>

            </View>

        </>
    )
}


export default Listaorcamento