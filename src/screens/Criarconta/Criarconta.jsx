import React, { useState, useEffect } from 'react'
import { styles } from './criarconta.style.js'
import { View, Alert } from 'react-native'
import Header from '../../components/header/header.jsx'
import TextBox from '../../components/textBox/textBox.jsx'
import Back from '../../components/back/back.jsx'
import api from '../../axios-instance.js'
import { Button } from '../../components/button/buton.jsx'
import Titulo from '../../components/titulo/titulo.jsx'
import icones from '../../constants/icones.js'

const Criarconta = (props) => {

    const [nome, setNome] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')
    const [apelido, setApelido] = useState('')

    useEffect(() => {
        setNome('')
        setPassword1('')
        setPassword2('')
        setEmail('')
        setApelido('')
    }, [])

    function VerifCampos() {

        if (email === '' || nome === '' || password1 === '' || password2 === '' || apelido === '') {
            return true
        }
        else {
            return false
        }
    }

    async function CreateUsuario() {

        if (password1 !== password2) {
            Alert.alert('Atenção !', 'As senhas não correspondem')
            return
        }

        if (VerifCampos()) {
            Alert.alert('Atenção !', 'Preencher todos os campos...')
            return
        }

        const novo = { nome: nome, email: email, password: password1, apelido: apelido }

        try {

            const response = await api.post('/usuarios', novo)

            if (response.data !== null) {
                props.navigation.navigate('Login')
            }

        } catch (error) {

            if (error.response?.data.error) {
                Alert.alert(error.response.data.error)
            }
            else
                Alert.alert('Ocorreu um erro. Tente Novamente')

        }
    }

    return (<View style={styles.container}>

        <Header />

        <Titulo titulo={'Criar sua Conta'} image={icones.user} back={icones.back} tela={'Login'} navigation={props.navigation} />

        <View style={styles.containerConta}>

            <View style={styles.nomes}>
                <TextBox label='Nome'
                    placeholder='Digite seu Nome'
                    value={nome}
                    onChangeText={(e) => setNome(e)}
                />
            </View>

            <View style={styles.nomes}>
                <TextBox label='Como quer ser chamado'
                    placeholder='Como quer ser chamado?'
                    value={apelido}
                    onChangeText={(e) => setApelido(e)}
                />
            </View>

            <View style={styles.emailSenha}>
                <TextBox label='E-mail'
                    placeholder='Email'
                    value={email}
                    tipoTeclado='email-address'
                    onChangeText={(e) => setEmail(e.toLowerCase())}
                />
            </View>

            <View style={styles.emailSenha}>
                <TextBox label='Senha'
                    placeholder='Senha'
                    value={password1}
                    onChangeText={(e) => setPassword1(e)}
                    isSecurity
                />
            </View>

            <View style={styles.emailSenha}>
                <TextBox label='Confirmar'
                    placeholder='Confirmar Senha'
                    value={password2}
                    onChangeText={(e) => setPassword2(e)}
                    isSecurity
                />
            </View>
        </View>

        <View style={styles.footer}>
            <Button texto={'Criar Conta'} onPress={CreateUsuario} ></Button>
        </View>

    </View>
    )
}


export default Criarconta