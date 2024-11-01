import {styles} from './back.style.js'
import { View, Text, TouchableOpacity} from 'react-native'
//import icones from '../../constants/icones.js'

const Back = () => {


  return (<View style={styles.container}>
            {/* <Image source={icones.back} style={styles.img} /> */}
              <Text style={styles.txt}>Voltar</Text>
        </View>
  )
}

export default Back