import React, {useContext} from 'react'
import {styles} from './home.style.js'
import {View, ScrollView, Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import Header from '../../components/header/header.jsx'
import icones from '../../constants/icones.js'
import {Button} from '../../components/button/buton.jsx'
import {AuthContext} from '../../context/Auth.js'
import {RemoveStorage} from '../../storage/storage.js'

const Home = (props) => {

    const {user, setUser} = useContext(AuthContext)

    const Logout = async () => {
        setUser({})
        await RemoveStorage('usuario')
        props.navigation.navigate('Login')
    }

    return (<View style={styles.container}>
            <Header/>

            <View style={styles.esquerda}>
                <Image source={icones.setaEsquerda} style={styles.seta}/>
            </View>

            <View style={styles.direita}>
                <Image source={icones.setaDireita} style={styles.seta}/>
            </View>

            <View style={styles.slideBox}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.contain}>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Mancliente')}>
                        <View style={styles.fotoSlide}>
                            <Image source={icones.cliente} style={styles.logo}/>
                            <Text style={styles.textFoto}>
                                Cliente
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('Listaorcamento')}>
                        <View style={styles.fotoSlide}>
                            <Image source={icones.orca2} style={styles.logo}/>
                            <Text style={styles.textFoto}>
                                Orçamento
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.fotoSlide}>
                            <TouchableOpacity>
                                <Image source={icones.servico} style={styles.logo}/>
                            </TouchableOpacity>
                            <Text style={styles.textFoto}>
                                Serviço
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.fotoSlide}>
                            <Image source={icones.fatura4} style={styles.logo}/>
                            <Text style={styles.textFoto}>
                                Faturamento
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.fotoSlide}>
                            <Image source={icones.configuracoes} style={styles.logo}/>
                            <Text style={styles.textFoto}>
                                Perfil
                            </Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Button texto={'Desconectar'} onPress={() => Logout()}></Button>
            </View>
        </View>
    )
}

export default Home