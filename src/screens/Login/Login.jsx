import React, { useContext, useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native'
import { styles } from './login.style.js'
import Header from '../../components/header/header.jsx'
import TextBox from '../../components/textBox/textBox.jsx'
import { AuthContext } from '../../context/Auth.js'
import api from '../../axios-instance.js'
import { Button } from '../../components/button/buton.jsx'
import { SaveStorage, LoadStorage } from '../../storage/storage.js'
import icones from '../../constants/icones.js'

function Login(props) {

  const [email, setEmail] = useState('cida.rigon@hotmail.com')
  const [password, setPassword] = useState('Rigon216')
  const [loading, setLoading] = useState(false)
  const [seguranca, setSeguranca] = useState(true)
  const { setUser, user } = useContext(AuthContext)

  async function ProcessaLogin() {

    const usuario = { email, password }

    if (email != '' && password != '') {

      try {

        setLoading(true)
        const response = await api.post('/usuarios/login', usuario)

        setUser(response.data)

        if (await response.data.token) {

          await SaveStorage(JSON.stringify(response.data))

          props.navigation.navigate("Home")
        }

      } catch (error) {

        if (error.response?.data.error) {
          Alert.alert(error.response.data.error)
        }

        else
          Alert.alert('Ocorreu um erro. Tente Novamente')
      } finally {
        setLoading(false)
      }
    }
  }

  async function StorageApp() {
    const user = await LoadStorage()
    console.log(user)
  }

  const Seguranca = () => {
    setSeguranca(!seguranca)
  }

  const NovaSenha = () => {

  }

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.containerLogin}>

        <Text style={styles.titulo}>Login</Text>

        <View style={styles.boxUser}>

          <View style={styles.texto}>
            <TextBox label='E-mail'
              placeholder='Digite seu e-mail'
              value={email}
              onChangeText={(e) => setEmail(e.toLowerCase())}
              tipoTeclado='email-address'
            />
          </View>

          <View style={styles.imagem}>
            <Image source={icones.email4} style={styles.email} />
          </View>

        </View>

        <View style={styles.boxUser}>
          <View style={styles.texto}>
            <TextBox label='Senha'
              placeholder='Digite sua senha'
              value={password}
              onChangeText={(e) => setPassword(e)}
              isSecurity={seguranca}
            />
          </View>

          {(seguranca) ? (
            <TouchableOpacity onPress={Seguranca}>
              <View style={styles.imagem}>
                <Image source={icones.cadeadoFechado} style={styles.cadeado} />
              </View>
            </TouchableOpacity>) :

            (<TouchableOpacity onPress={Seguranca}>
              <View style={styles.imagem}>
                <Image source={icones.cadeadoAberto} style={styles.cadeado} />
              </View>
            </TouchableOpacity>)}
        </View>

        <View style={styles.footer}>
          <Button texto={'Acessar'} onPress={ProcessaLogin} isLoading={loading}></Button>
        </View>

        {/* <View style={styles.footer}>
            <Button texto={'Get Storge'} onPress={() => StorageApp()}></Button>
        </View> */}


        <View style={styles.redefinir}>
          <Text style={styles.textRedef}>
            Esqueceu a Senha?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Codigo')} >
            <View>
              <Text style={[styles.text, styles.corClick]}>
                Redefinir
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.semConta}>
          <Text style={styles.text}>
            Não tem Conta?
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Criarconta')} >
            <Text style={[styles.text, styles.corClick]}>
              Clik aqui...
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View >
  )
}

export default Login