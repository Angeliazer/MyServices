import { View, TouchableOpacity, ScrollView, Text, ActivityIndicator, Image, Alert } from 'react-native'
import { styles } from './mancliente.style.js'
import Header from '../../components/header/header.jsx'
import { useEffect, useState, useContext } from 'react'
import api from '../../axios-instance.js'
import icones from '../../constants/icones.js'
import TextBox from '../../components/textBox/textBox.jsx'
import { Button } from '../../components/button/buton.jsx'
import { AuthContext } from '../../context/Auth.js'
import Deletarcliente from '../../screens/Cliente/Deletarcliente.jsx'
import Titulo from "../../components/titulo/titulo.jsx"
import { COLORS } from '../../constants/theme.js'

function Mancliente(props) {

    const [loading, setLoading] = useState(false)
    const [nomePesq, setNomePesq] = useState('')

    const navigation = props.navigation

    const { dataCliente, setDataCliente, index, setIndex, setModalVisible, setItem, user } = useContext(AuthContext);

    useEffect(() => {

        const fetchData = async () => {
            await LerClientes()
        }

        const unsubscribe = navigation.addListener('focus', () => {
            setNomePesq('')
            fetchData()
        })

        // Limpar o listener ao desmontar o componente
        return unsubscribe;
    }, [navigation]);

    const LerClientes = async () => {
        try {
            if (!user.token) {
                Alert.alert('Erro', 'Não foi possível conectar à API..tente mais tarde', [{
                    text: 'OK',
                    onPress: () => navigation.navigate('Home')
                }]);
            }
            setLoading(true);
            const response = await api.get('/clientes', { headers: { 'Authorization': `Bearer ${user.token}` } });
            setDataCliente(response.data);
        } catch (error) {
            setLoading(false);
            Alert.alert('Erro', 'Não foi possível conectar à API. Verifique sua conexão ou tente mais tarde.', [{
                text: 'OK',
                onPress: () => props.navigation.navigate('Home')
            }]);
        } finally {
            setLoading(false);
        }
    }

    const RefreshData = () => {
        LerClientes()
    }

    const DelCliente = (item) => {
        setItem(item)
        setIndex(item.idCliente)
        setModalVisible(true)
    }

    const ConsultaCliente = (item) => {
        setItem(item)
        navigation.navigate('Consultacliente')
    }

    const Orcamento = (item) => {
        setItem(item)
        navigation.navigate('Orcamento')
    }

    const PesquisaNome = async () => {
        try {
            if (nomePesq.trim() === '') {
                await LerClientes(user.token)
                return
            }

            const response = await api.get(`/clientes/nome/?nome=${nomePesq}`, { headers: { 'Authorization': `Bearer ${user.token}` } })

            if (response.data.length == 0) {
                Alert.alert(
                    'Atenção',
                    'Não existe cliente cadastrado com esse nome..',
                    {
                        text: 'Ok',
                        onPress: setNomePesq('')
                    }
                )
            } else
                setDataCliente(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    const LimpaPesquisa = (e) => {
        setNomePesq(e)
        PesquisaNome()
    }

    return (
        <>
            {loading && (
                <View style={styles.containerLoading}>
                    <ActivityIndicator size="large" color={COLORS.red} />
                </View>
            )}

            <View style={styles.container}>
                <Header />

                <Titulo titulo={'Clientes'} image={icones.cliente} back={icones.back} tela={'Home'} navigation={navigation} />

                <View style={styles.boxPesquisa}>
                    <View style={[styles.nome, styles.space90]}>
                        <TextBox
                            label=''
                            placeholder='Nome da Pesquisa'
                            value={nomePesq}
                            onChangeText={(e) => {
                                setNomePesq(e);
                                if (e === '') {
                                    LimpaPesquisa(e)
                                }
                            }}
                        />
                    </View>

                    <View style={styles.space10}>
                        <TouchableOpacity onPress={PesquisaNome} style={styles.space10}>
                            <Image source={icones.pesquisa} style={styles.logoTipo} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
                    {dataCliente.map((item) => (
                        <View key={item.idCliente}>

                            <View style={styles.containerLinha}>
                                <View style={styles.containerNome}>
                                    <TouchableOpacity onPress={() => ConsultaCliente(item)}>
                                        <Text style={styles.linha}>
                                            {item.nome}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.containerLogo}>
                                    {/* <TouchableOpacity onPress={() => NovoOrcamento(item)}>
                                        <Image source={icones.orca2} style={styles.logoNormal} />
                                    </TouchableOpacity> */}

                                    <TouchableOpacity onPress={() => Orcamento(item)}>
                                        <Image source={icones.orca2} style={styles.logoNormal} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                        <Image source={icones.cliente2} style={styles.logoNormal} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => DelCliente(item)}>
                                        <Image source={icones.deletar} style={styles.logoTipoLixeira} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    ))}
                </ScrollView>

                {index !== null && <Deletarcliente refresh={() => RefreshData()} />}

                <View style={styles.footer}>
                    <Button texto='+ Novo Cliente' onPress={() => props.navigation.navigate('Novocliente')} isLoading={loading}></Button>
                </View>
            </View>
        </>
    )
}

export default Mancliente
