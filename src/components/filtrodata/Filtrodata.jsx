import {View, Text, Alert, Keyboard} from "react-native"
import {styles} from './filtrodata.style.js'
import {useContext, useRef} from "react"
import {TouchableOpacity} from "react-native"
import {TextInputMask} from 'react-native-masked-text';
import {AuthContext} from "../../context/Auth.js"
import {ComparaData} from "../../funcoes/funcaoConversao.js";


const Filtrodata = (props) => {

    const {datavalida, setDatavalida, dataInicial, dataFinal, setDataInicial, setDataFinal} = useContext(AuthContext)

    const numRef1 = useRef(null)
    const numRef2 = useRef(null)

    const isValidDate = (dateString) => {
        const [day, month, year] = dateString.split('/');
        const parsedDate = new Date(year, month - 1, day);  // 'month - 1' porque os meses em JS começam em 0
        return (parsedDate && parsedDate.getDate() == day && parsedDate.getMonth() + 1 == month && parsedDate.getFullYear() == year);
    };

    const handleDataInicialChange = (text) => {
        setDataInicial(text);
        if (text.length === 10) {
            setDatavalida(isValidDate(text))
            Keyboard.dismiss()
            numRef2.current.getElement().focus()
        }
    };

    const handleDataFinalChange = (text) => {
        setDataFinal(text);
        if (text.length === 10) {
            Keyboard.dismiss()
            setDatavalida(isValidDate(text))
        }
    };

    const InicializaData = () => {
        setDataFinal((new Date().toLocaleString('pt-BR')).substring(0, 10))
    }

    const handleConsultar = () => {
        if (dataInicial !== '' && dataFinal !== '') {
            if (!ComparaData(dataInicial, dataFinal)) {
                Alert.alert('Atenção!', 'Data Final menor que a Data Inicial', [{
                    'text': 'Ok',
                    onPress: () => InicializaData()
                }])
            }
            Keyboard.dismiss()
            props.onPress()
        } else {
            Keyboard.dismiss()
            props.onPress()
        }
    }

    return (<>
        <View style={styles.container}>
            <TextInputMask
                style={styles.input}
                type={'datetime'}
                options={{format: 'DD/MM/YYYY'}}
                placeholder="Data Inicial"
                value={dataInicial}
                onChangeText={(e) => handleDataInicialChange(e)}
                keyboardType="number-pad"
                returnKeyType="done"
                ref={numRef1}
            />
            <TextInputMask
                style={styles.input}
                type={'datetime'}
                options={{format: 'DD/MM/YYYY'}}
                placeholder="Data Final"
                value={dataFinal}
                onChangeText={(e) => handleDataFinalChange(e)}
                keyboardType="number-pad"
                returnKeyType='done'
                ref={numRef2}
            />
            <TouchableOpacity style={styles.button} onPress={handleConsultar}>
                <Text style={styles.texto}>
                    Consultar
                </Text>
            </TouchableOpacity>

        </View>
    </>);
};


export default Filtrodata