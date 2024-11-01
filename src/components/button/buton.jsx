import { View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import {styles} from './button.style.js'

const Button = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}
            style={[styles.buttom, props.isLoading ? styles.desativa : '', props.colorRed ? styles.corFundo : '']}
            disabled = {props.isLoading}>
            <Text style={styles.textButton}>{props.texto}</Text> 
        </TouchableOpacity>
    )
}

export {Button}