import {ScrollView, Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import {styles} from './orcamento.style.js'
import {useContext, useEffect, useState} from 'react'
import Header from '../../components/header/header.jsx'
import Titulo from '../../components/titulo/titulo.jsx'
import icones from '../../constants/icones.js'
import {AuthContext} from '../../context/Auth.js'
import api from '../../axios-instance.js'
import {ConverteData, ConverteValor} from '../../funcoes/funcaoConversao.js'
import {Button} from '../../components/button/buton.jsx'
import {Servico} from "../../models/model.servico/model.servico"
import Loading from "../../components/loading/loading"

const Orcamento = (props) => {

    const {data, setData, item, user, itemSelected, setItemSelected} = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [service, setService] = useState(false)
    const [deleta, setDeleta] = useState(false)
    const navigation = props.navigation

    useEffect(() => {
        return navigation.addListener('focus', () => {
            LerOrcamentos()
        })

    }, [navigation])

    const LerOrcamentos = async () => {
        try {
            setLoading(true)
            if (!user.token) {
                Alert.alert('Erro', 'Problemas com o Token de Autenticação...!', [{
                    text: 'OK', onPress: () => navigation.navigate('Mancliente')
                }])
            }
            const response = await api.get(`/orcamentos/clientes/${item.idCliente}`, {headers: {'Authorization': `Bearer ${user.token}`}})

            response.data.sort((a, b) => new Date(b.data) - new Date(a.data)) //ordena por data da maior para a menor

            setData(response.data)
        } catch {
            Alert.alert('Erro', 'Não foi possível conectar à API. Verifique sua conexão ou tente mais tarde.', [{
                text: 'OK', onPress: () => navigation.navigate('Mancliente')
            }])
        } finally {
            setLoading(false)
        }
    }

    const SaveItem = async () => {
        setService(false)
        setLoading(true)
        try {
            const servico = new Servico()
            servico.idOrcamento = itemSelected.idOrcamento
            servico.idCliente = itemSelected.idCliente
            servico.idUsuario = itemSelected.idUsuario
            servico.dataIni = new Date().toISOString().split('T')[0]
            servico.dataFim = null
            servico.situacao = 'A'
            servico.total = itemSelected.vlrTotal
            servico.saldo = itemSelected.vlrTotal
            await api.post(`/servicos/add`, servico)
            Alert.alert(
                'Atenção.',
                'Orçamento Convertido em Serviço com sucesso!',
                [{text: 'Ok'}]
            )
            LerOrcamentos()   //Atualiza Tela....
        } catch (e) {
            console.log(e)
            Alert.alert('Erro', 'Não foi possível conectar à API. Verifique sua conexão ou tente mais tarde.', [{
                text: 'OK', onPress: () => navigation.navigate('Mancliente')
            }])
        } finally {
            setLoading(false)
        }
    }

    const GetItem = (index) => {
        setItemSelected(index)
        setService(true)
    }

    const MostraOrcamento = (index) => {
        setItemSelected(index)
        navigation.navigate('DisplayOrcamento')
    }

    const SelectItem = (index) => {
        setItemSelected(index)
        setDeleta(true)
    }

    const DeleteItem = async () => {
        setDeleta(false)
        try {
            setLoading(true)
            await api.delete(`/orcamentos/delete`, {
                params: {idOrcamento: `${itemSelected.idOrcamento}`}
            })
            Alert.alert(
                'Orçamento excluído com sucesso!',
                '',
                [{text: 'OK'}]
            )
            LerOrcamentos()
        } catch (e) {

        } finally {
            setLoading(false)
        }
    }

    return<>
        {loading && <Loading/>}
        <View style={styles.container}>
            {service && (<View style={styles.containerLoading}>
                <View style={styles.boxMensagem}>
                    <View>
                        <Text style={styles.mensagem}>
                            {`Confirma Conversão do Orçamento\n em Serviço?`}
                        </Text>
                    </View>
                    <View style={styles.boxButton}>
                        <TouchableOpacity style={styles.boxNao} onPress={() => setService(false)}>
                            <Text style={styles.textButton}>
                                Não
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxSim} onPress={SaveItem}>
                            <Text style={styles.textButton}>
                                Sim
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>)}

            {deleta && (<View style={styles.containerLoading}>
                <View style={styles.boxMensagem}>
                    <View>
                        <Text style={styles.mensagem}>
                            <Text>Confirma Exclusão do Orçamento {itemSelected.idOrcamento} ?</Text>
                        </Text>
                    </View>

                    <View style={styles.boxButton}>
                        <TouchableOpacity style={styles.boxNao} onPress={() => setDeleta(false)}>
                            <Text style={styles.textButton}>
                                Não
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxSim} onPress={DeleteItem}>
                            <Text style={styles.textButton}>
                                Sim
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>)}
            <View style={styles.container}>
                <Header/>
                <Titulo titulo={'Orçamentos Cliente'} image={icones.orca2} back={icones.back} tela={'Mancliente'}
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
                    {data.map((item) => (<View key={item.idOrcamento} style={styles.containerOrcamento}>
                        <View style={styles.boxDados}>
                            <View style={styles.boxData}>
                                <Text style={styles.textOrca}>
                                    Os:{' ' + item.idOrcamento}
                                </Text>
                            </View>

                            <View style={styles.boxIcones}>

                                <TouchableOpacity style={styles.icones}>
                                    <Image source={icones.email4} style={styles.icones}/>
                                </TouchableOpacity>

                                {item.servico === 'N' ?
                                    <TouchableOpacity style={styles.icones} onPress={() => SelectItem(item)}>
                                        <Image source={icones.deletar} style={styles.icones}/>
                                    </TouchableOpacity> : <TouchableOpacity style={styles.icones} disabled={true}>
                                        <Image source={icones.deletar} style={styles.iconesOpacity}/>
                                    </TouchableOpacity>}

                                {item.servico === 'N' ?
                                    <TouchableOpacity style={styles.icones} onPress={() => GetItem(item)}>
                                        <Image source={icones.converter} style={styles.icones}/>
                                    </TouchableOpacity> : <TouchableOpacity style={styles.icones} disabled={true}>
                                        <Image source={icones.converter} style={styles.iconesOpacity}/>
                                    </TouchableOpacity>}

                                {item.servico === 'N' ?
                                    <TouchableOpacity style={styles.icones} onPress={() => MostraOrcamento(item)}>
                                        <Image source={icones.expandir} style={styles.icones}/>
                                    </TouchableOpacity> : <TouchableOpacity style={styles.icones} disabled={true}>
                                        <Image source={icones.expandir} style={styles.iconesOpacity}/>
                                    </TouchableOpacity>}
                            </View>
                        </View>
                        <View style={styles.boxValor}>
                            <Text style={styles.textData}>
                                {item.data ? ConverteData(item.data) : ''}
                            </Text>
                            <Text style={styles.textValor}>
                                Total:{' ' + ConverteValor(item.vlrTotal)}
                            </Text>
                        </View>
                    </View>))}
                </ScrollView>
                <View style={styles.footer}>
                    <Button texto={'+ Novo Orçamento'} onPress={() => navigation.navigate('Novoorcamento')}
                            isLoading={loading}></Button>
                </View>
            </View>
        </View>
    </>
}

export default Orcamento
