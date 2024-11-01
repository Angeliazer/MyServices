import { View, TouchableOpacity, ScrollView, Text, ActivityIndicator, Image, Alert } from "react-native"
import React, { useContext, useState } from "react"
import Header from "../../components/header/header.jsx"
import { styles } from '../Cliente/novocliente.style.js'
import icones from "../../constants/icones.js"
import TextBox from "../../components/textBox/textBox.jsx"
import api from '../../axios-instance.js'
import { LoadStorage } from "../../storage/storage.js"
import Titulo from "../../components/titulo/titulo.jsx"
import { AuthContext } from "../../context/Auth.js"

const Novocliente = (props) => {

    const [loading, setLoading] = useState(false)
    const [nome, setNome] = useState('Pedro')
    const [endereco, setEndereco] = useState('p')
    const [nro, setNro] = useState(216)
    const [bairro, setBairro] = useState('Mutuá')
    const [cidade, setCidade] = useState('São Gonçalo')
    const [estado, setEstado] = useState('RJ')
    const [email, setEmail] = useState('yyrigon@gmai.com')
    const [ddd, setDdd] = useState('21')
    const [telefone, setTelefone] = useState('967453213')

    const Cancelar = async () => {
        props.navigation.navigate('Mancliente')
    }

    const Salvar = async () => {

        try {
            setLoading(true)

            const user = await LoadStorage()

            const token = user.token

            const cliente = { nome, endereco, nro, bairro, cidade, estado, email, ddd, telefone }

            cliente.idUsuario = user.idUsuario

            const response = await api.post('/clientes/add', cliente, { headers: { 'Authorization': `Bearer ${token}` } })

            if (response.status === 201) {
                Alert.alert(
                    cliente.nome,
                    'Cadastrado com sucesso..!',
                    [{
                        text: 'OK',
                        onPress: () => props.navigation.navigate('Mancliente')
                    }])
            }

        } catch (error) {
            Alert.alert(
                '',
                error.response?.data?.error,
                [{
                    text: 'OK',
                    //onPress: () => props.navigation.navigate('Mancliente', { apelido })
                }])

        } finally {
            setLoading(false)
        }
    }

    return (<View style={styles.container}>

        <Header />

        <Titulo titulo={'Novo Cliente'} image={icones.clientePlus} back={icones.back} tela={'Mancliente'} navigation={props.navigation} />

        <ScrollView style={styles.containerConta} showsVerticalScrollIndicator={false}
            automaticallyAdjustKeyboardInsets={true}>

            <View style={styles.nomes}>
                <TextBox label='Nome'
                    placeholder='Digite seu Nome'
                    value={nome}
                    onChangeText={(e) => setNome(e)}
                />
            </View>

            <View style={styles.containerEndereco}>
                <View style={styles.linha75}>
                    <TextBox label='Endereço'
                        placeholder='Endereço'
                        value={endereco}
                        onChangeText={(e) => setEndereco(e)}
                    />
                </View>

                <View style={styles.linha15}>
                    <TextBox label='Nro'
                        placeholder='Nro'
                        value={nro}
                        tipoTeclado='numeric'
                        alinha
                        onChangeText={(e) => setNro(e)}
                    />
                </View>
            </View>

            <View style={styles.linha90}>
                <TextBox label='Bairro'
                    placeholder='Bairro'
                    value={bairro}
                    //tipoTeclado='email-address'
                    onChangeText={(e) => setBairro(e)}
                />
            </View>

            <View style={styles.containerEndereco}>
                <View style={styles.linha75}>
                    <TextBox label='Cidade'
                        placeholder='Cidade'
                        value={cidade}
                        onChangeText={(e) => setCidade(e)}
                    />
                </View>

                <View style={styles.linha15}>
                    <TextBox label='UF'
                        placeholder='UF'
                        maxLength={2}
                        value={estado}
                        onChangeText={(e) => setEstado(e.toUpperCase())}
                    />
                </View>
            </View>

            <View style={styles.containerEndereco}>
                <View style={styles.linha40}>
                    <TextBox label='DDD'
                        placeholder='Nro DDD'
                        value={ddd}
                        maxLength={2}
                        tipoTeclado='numeric'
                        alinha
                        onChangeText={(e) => setDdd(e)}
                    />
                </View>

                <View style={styles.linha60}>
                    <TextBox label='Telefone'
                        placeholder='Nro telefone'
                        maxLength={9}
                        value={telefone}
                        tipoTeclado='numeric'
                        alinha
                        onChangeText={(e) => setTelefone(e)}
                    />
                </View>
            </View>

            <View style={styles.linha90}>
                <TextBox label='E-mail'
                    placeholder='Email'
                    value={email}
                    tipoTeclado='email-address'
                    onChangeText={(e) => setEmail(e.toLowerCase())}
                />
            </View>

        </ScrollView>

        <View style={styles.footer}>
            <TouchableOpacity onPress={Cancelar} style={styles.cancelar}>
                <Text style={styles.texto}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={Salvar} style={styles.salvar}>
                <Text style={styles.texto}>Salvar</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}


export default Novocliente