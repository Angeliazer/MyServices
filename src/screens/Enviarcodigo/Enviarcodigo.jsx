import React, { useContext, useEffect, useState } from 'react'
import {styles} from './enviarcodigo.style.js'
import {ScrollView, Text, TouchableOpacity, View, Image } from 'react-native'
import { AuthContext } from '../../context/Auth.js'
import Header from '../../components/header/header.jsx'
import TextBox from '../../components/textBox/textBox.jsx'
import Back from '../../components/back/back.jsx'
import Codigo from '../../components/codigo/codigo.jsx'

const Enviarcodigo = (props) => {

    const {nome, setNome, sobrenome, setSobrenome, email, setEmail,
           password, setPassword,
           password1, setPassword1} = useContext(AuthContext)

    return (<View style={styles.container}>
    
                <Header />

                <TouchableOpacity onPress={()=>props.navigation.navigate('criarconta')}>
                    <Back />
                </TouchableOpacity>

                <ScrollView style={styles.containerCodigo} automaticallyAdjustKeyboardInsets={true}
                    showsVerticalScrollIndicator={false}>

                    <Text style={styles.titulo}>Digite o código de verificação recebido por e-mail</Text>

                    <Codigo style={styles.containerInput}/>
                
                    <TouchableOpacity style={styles.buttom}>
                        <Text style={styles.textButton}>Enviar</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
   )
}


export default Enviarcodigo