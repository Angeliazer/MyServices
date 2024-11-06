import {ActivityIndicator, View} from "react-native"
import {styles} from "../../screens/Cliente/mancliente.style"
import {COLORS} from "../../constants/theme"
import React from "react"

const Loading = () => {

    return<View style={styles.containerLoading}>
        <ActivityIndicator size="large" color={COLORS.blueNovo}/>
    </View>

}

export default Loading;