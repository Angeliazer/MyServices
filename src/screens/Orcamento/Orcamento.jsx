import { ScrollView, Text, View, ActivityIndicator, Image } from 'react-native'
import { styles } from '../Orcamento/orcamento.style.js'
import { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/header.jsx'
import Titulo from '../../components/titulo/titulo.jsx'
import icones from '../../constants/icones.js'
import { AuthContext } from '../../context/Auth.js'
import { LoadStorage } from '../../storage/storage.js'
import api from '../../axios-instance.js'
import { COLORS } from '../../constants/theme.js'
import { ConverteData, ConverteValor } from '../../funcoes/funcaoConversao.js'
import { Button } from '../../components/button/buton.jsx'


const Orcamento = (props) => {

    const { apelido, data, setData, item, setItem, user } = useContext(AuthContext)

    const navigation = props.navigation

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            LerOrcamentos()
        })

        // Limpar o listener ao desmontar o componente
        return unsubscribe;

    }, [navigation])


    const LerOrcamentos = async () => {
        try {
            if (!user.token) {
                Alert.alert('Erro', 'Problemas com o Token de Autenticação...!', [{
                    text: 'OK',
                    onPress: () => navigation.navigate('Mancliente')
                }]);
            }
            setLoading(true);
            const response = await api.get(`/orcamentos/clientes/${item.idCliente}`,
                { headers: { 'Authorization': `Bearer ${user.token}` } })

            response.data.sort((a, b) => new Date(b.data) - new Date(a.data)) //ordena por data da maior para a menor

            setData(response.data)
        }
        catch {
            setLoading(false);
            Alert.alert('Erro', 'Não foi possível conectar à API. Verifique sua conexão ou tente mais tarde.', [{
                text: 'OK',
                onPress: () => props.navigation.navigate('Mancliente')
            }]);
        } finally {
            setLoading(false);
        }

    }

    return <View style={styles.container}>

        {loading && (
            <View style={styles.containerLoading}>
                <ActivityIndicator size="large" color={COLORS.red} />
            </View>
        )}

        <View style={styles.container}>

            <Header texto={apelido} />

            <Titulo titulo={'Orçamentos Cliente'} image={icones.orca2} back={icones.back} tela={'Mancliente'} navigation={navigation} />

            <View style={styles.boxTitulo}>
                <Text style={styles.text}>
                    Cliente:
                </Text>
                <Text style={styles.nome}>
                    {' ' + item.nome}
                </Text>
            </View>

            <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
                {data.map((item) => (
                    <View key={item.idOrcamento} style={styles.containerOrcamento}>
                        <View style={styles.boxDados}>
                            <View style={styles.boxData}>
                                <Text style={styles.textOrca}>
                                    Os:{' ' + item.idOrcamento}
                                </Text>
                            </View>

                            <View style={styles.boxIcones}>
                                <Image source={icones.email4} style={styles.icones} />
                                <Image source={icones.deletar} style={styles.icones} />
                                <Image source={icones.servico} style={styles.icones} />
                            </View>
                        </View>
                        <View style={styles.boxValor}>
                            <Text style={styles.textData}>
                                {ConverteData(item.data)}
                            </Text>
                            <Text style={styles.textValor}>
                                Total:{' ' + ConverteValor(item.vlrTotal)}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                <Button texto={'+ Novo Orçamento'} onPress={() => props.navigation.navigate('Novoorcamento', item)} isLoading={loading}></Button>
            </View>
        </View>
    </View>
}

export default Orcamento
