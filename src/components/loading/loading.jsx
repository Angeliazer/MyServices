import {ActivityIndicator, View} from "react-native"
import {styles} from "../../screens/Cliente/mancliente.style"
import {COLORS} from "../../constants/theme"
import React from "react"

const Loading = () => {

    return<View style={styles.containerLoading}>
        <ActivityIndicator size="small" color={COLORS.blue}/>
    </View>

}

export default Loading;
