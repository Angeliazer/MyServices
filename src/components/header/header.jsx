import React, { useContext } from 'react'
import { styles } from '../../components/header/header.style.js'
import icones from '../../constants/icones.js'
import { View, Text, Image, SafeAreaView } from 'react-native'
import { AuthContext } from '../../context/Auth.js'

const Header = (props) => {

  const { user } = useContext(AuthContext)

  return (<SafeAreaView style={styles.container}>
    <View style={styles.headers}>
      <Image source={icones.orca1} style={styles.logoTipo} />
      <Text style={styles.texto}>
        Services+
      </Text>
    </View>
    <Text style={styles.usuario}>
      {Object.keys(user).length > 0 ? 'Bem Vindo: ' + user.apelido : ''}
    </Text>
  </SafeAreaView>
  )
}

export default Header