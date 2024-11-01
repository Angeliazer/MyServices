import { View, TouchableOpacity, Image, Text } from "react-native"
import {styles} from '../titulo/titulo.style.js'
import { AuthContext } from "../../context/Auth.js"
import { useContext } from "react"


const Titulo = (props) => {

    const Voltar = () =>{
        props.navigation.navigate(props.tela)
    }

    return (
        <View style={styles.cabecalho}>
            
            <TouchableOpacity onPress={Voltar}>
                <Image source={props.back} style={styles.logoTipo} />
            </TouchableOpacity>

            <View>
                <Text style={styles.titulo}>
                    {props.titulo}
                </Text>
            </View>

            <View>
                <Image source={props.image} style={styles.logoTipo} />
            </View>
        </View>
    )
}

export default Titulo
