import {styles} from './ServiceClient.style.js'
import {ScrollView, Text, View, Alert, Image, TouchableOpacity} from "react-native"
import {AuthContext} from "../../context/Auth"
import {useContext, useEffect} from "react"
import Header from "../../components/header/header"
import Titulo from "../../components/titulo/titulo"
import icones from "../../constants/icones"
import api from "../../axios-instance"
import {ConverteData, ConverteValor} from "../../funcoes/funcaoConversao"

const ServiceClient = (props) => {

    const {user, item, data, setData} = useContext(AuthContext)

    const navigation = props.navigation

    useEffect(() => {

        const LerServicos = async () => {

            try {
                const response = await api.get('/servicos/clientes', {
                    params: {idUsuario: `${item.idUsuario}`, idCliente: `${item.idCliente}`},
                    headers: {'Authorization': `Bearer ${user.token}`}
                })
                setData(response.data)
            } catch (e) {
                if (e.response?.data.error) {
                    Alert.alert(
                        'Atenção.',
                        e.response.data.error,
                        [{
                            text: 'OK',
                        }])
                } else
                    Alert.alert(`${e}`)
            }
        }
        LerServicos()
    }, [])


    return (

        <View style={styles.container}>
            <Header/>

            <Titulo titulo={'Serviços Cliente'} image={icones.cliente} back={icones.back} tela={'Mancliente'}
                    navigation={navigation}/>

            <View style={styles.boxTitulo}>
                <Text style={styles.text}>
                    Cliente:
                </Text>
                <Text style={styles.nome}>
                    {' ' + item.nome}
                </Text>
            </View>

            <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>

                {data.map((item) => (<View key={item.idOrcamento} style={styles.boxServico}>
                    <View style={styles.boxLinhaUm}>
                        <View style={styles.boxOsData}>
                            <Text style={styles.textOs}>
                                Os: {item.idOrcamento}
                            </Text>
                            {item.dataIni ? <Text style={styles.textOs}>
                                Início: {ConverteData(item.dataIni)}</Text> : ''}
                        </View>
                        <View style={styles.boxIcones}>
                            <TouchableOpacity>
                                <Image source={icones.deletar} style={styles.icones}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={icones.fatura4} style={styles.icones}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxLinhaDois}>
                        <View style={styles.boxDataFim}>
                            {item.dataFim ? <Text style={styles.textLinha}>
                                Fim: {ConverteData(item.dataIni)}</Text> : ''}
                        </View>
                        <View style={styles.boxTotal}>
                            <Text style={styles.textLinha}>
                                Total R$ {ConverteValor(item.total)}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.boxLinhaTres}>
                        <View style={styles.boxSituacao}>
                            {item.situacao === 'A' ? <Text style={styles.textLinha}>
                                    Situação: <Text style={styles.textLinhaVermelha}> Execução </Text>
                                </Text> :
                                <Text style={styles.textLinha}>
                                    Situação: <Text style={styles.textLinhaAzul}> Fechado </Text>
                                </Text>}
                        </View>
                        <View style={styles.boxSaldo}>
                            {item.saldo > 0 ? <Text style={styles.textLinha}>
                                    Saldo R$ <Text style={styles.textLinhaVermelha}> {ConverteValor(item.saldo)} </Text>
                                </Text> :
                                <Text style={styles.textLinha}>
                                    Saldo R$ <Text style={styles.textLinhaAzul}> {ConverteValor(item.saldo)} </Text>
                                </Text>}
                        </View>


                    </View>


                </View>))
                }


            </ScrollView>


        </View>
    )
}

export default ServiceClient