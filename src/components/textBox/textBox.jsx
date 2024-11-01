import React from 'react'
import { styles } from './textBox.style.js'
import { Text, TextInput, View } from 'react-native'

const TextBox = (props) => {


    return (
        <View>
            <Text style={[styles.label, props.alinha ? styles.alinha : '']}>{props.label}</Text>

            <TextInput style={[styles.input, props.alinha ? styles.alinha : '']}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                value={props.value}
                keyboardType={props.tipoTeclado}
                returnKeyType='done'
                onChangeText={(e) => { props.onChangeText(e) }}
                secureTextEntry={props.isSecurity}
                editable={props.editable}
                ref={props.referencia}
                onFocus={props.onFocus}
                onChange={props.onChange}
            />
        </View>
    )
}

export default TextBox