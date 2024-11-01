import { View, ScrollView } from "react-native"
import { useContext, useState } from "react"
import Header from "../../components/header/header"
import Titulo from "../../components/titulo/titulo"
import { styles } from '../Cliente/consultacliente.style.js'
import icones from "../../constants/icones"
import TextBox from "../../components/textBox/textBox.jsx"
import { AuthContext } from "../../context/Auth.js"

const Consultacliente = (props) => {

    const { item } = useContext(AuthContext)

    return (<View style={styles.container}>

        <Header />
        <Titulo titulo={'Consulta Cliente'} image={icones.cliente} back={icones.back} tela={'Mancliente'} navigation={props.navigation} />

        <View style={styles.container}>

            <View style={styles.nomes}>
                <TextBox label='Nome'
                    value={item.nome}
                    editable={false}
                />
            </View>

            <View style={styles.containerEndereco}>
                <View style={styles.linha80}>
                    <TextBox label='Endereço'
                        value={item.endereco}
                        editable={false}
                    />
                </View>

                <View style={styles.linha15}>
                    <TextBox label='Nro'
                        value={item.nro}
                        editable={false}
                        alinha
                    />
                </View>
            </View>

            <View style={styles.linha90}>
                <TextBox label='Bairro'
                    value={item.bairro}
                    ediTable={props.ediTable}
                    editable={false}
                />
            </View>

            <View style={styles.containerEndereco}>
                <View style={styles.linha80}>
                    <TextBox label='Cidade'
                        value={item.cidade}
                        editable={false}
                    />
                </View>

                <View style={styles.linha15}>
                    <TextBox label='UF'
                        value={item.estado}
                        editable={false}
                    />
                </View>
            </View>

            <View style={styles.containerEndereco}>
                <View style={styles.linha40}>
                    <TextBox label='DDD'
                        value={item.ddd}
                        editable={false}
                        alinha
                    />
                </View>

                <View style={styles.linha60}>
                    <TextBox label='Telefone'
                        value={item.telefone}
                        editable={false}
                        alinha
                    />
                </View>
            </View>

            <View style={styles.linha90}>
                <TextBox label='E-mail'
                    value={item.email}
                    editable={false}
                />
            </View>

        </View>
    </View>
    )
}

export default Consultacliente