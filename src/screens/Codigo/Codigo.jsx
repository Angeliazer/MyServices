import React, { useRef } from 'react'
import { styles } from './codigo.style.js'
import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native'

const Codigo = () => {

  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)
  const input6Ref = useRef(null)

  const handleInputChange = (e, nextInputRef) => {
    if (e.length >= 1) {
      nextInputRef.current.focus(); // Move o foco para o próximo campo
    }
  }

  return (

    <View style={styles.container}>
      <View style={styles.containerInput}>

        <TextInput style={styles.input}
          type="text"
          ref={input1Ref}
          maxLength={1}
          onChangeText={(e) => handleInputChange(e, input2Ref)}
          keyboardType='number-pad'
        />
        <TextInput style={styles.input}
          type="text"
          ref={input2Ref}
          maxLength={1}
          onChangeText={(e) => handleInputChange(e, input3Ref)}
          keyboardType='number-pad'
        />
        <TextInput style={styles.input}
          type="text"
          ref={input3Ref}
          maxLength={1}
          onChangeText={(e) => handleInputChange(e, input4Ref)}
          keyboardType='number-pad'
        />
        <TextInput style={styles.input}
          type="text"
          ref={input4Ref}
          maxLength={1}
          onChangeText={(e) => handleInputChange(e, input5Ref)}
          keyboardType='number-pad'
        />
        <TextInput style={styles.input}
          type="text"
          ref={input5Ref}
          maxLength={1}
          onChangeText={(e) => handleInputChange(e, input6Ref)}
          keyboardType='number-pad'
        />
        <TextInput style={styles.input}
          type="text"
          ref={input6Ref}
          maxLength={1}
          keyboardType='number-pad'
        />

      </View>

    </View>

  )
}
export default Codigo