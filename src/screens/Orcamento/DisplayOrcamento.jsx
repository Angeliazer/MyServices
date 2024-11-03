import {styles} from '../Orcamento/DisplyaOrcamento.style'
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native"
import Header from "../../components/header/header"
import Titulo from "../../components/titulo/titulo"
import icones from "../../constants/icones"
import {ConverteData, ConverteValor} from "../../funcoes/funcaoConversao"
import {Button} from "../../components/button/buton"


const DisplayOrcamento = (item) => {

    console.log(item)

    return (
        <View style={styles.container}>

            <Header/>

            <Titulo titulo={'Manutenção Orçamentos'} image={icones.orca2} back={icones.back} tela={'Orcamentos'}
                    navigation={navigation}/>

            <View style={styles.boxTitulo}>
                <Text style={styles.text}>
                    Cliente:
                </Text>
                <Text style={styles.nome}>
                    {' ' + item.nome}
                </Text>
            </View>

            <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false}>
                {data.map((item) => (<View key={item.idOrcamento} style={styles.containerOrcamento}>
                    <View style={styles.boxDados}>
                        <View style={styles.boxData}>
                            <Text style={styles.textOrca}>
                                Os:{' ' + item.idOrcamento}
                            </Text>
                        </View>

                        <View style={styles.boxIcones}>

                            <TouchableOpacity style={styles.icones}>
                                <Image source={icones.email4} style={styles.icones}/>
                            </TouchableOpacity>

                            {item.servico === 'N' ?
                                <TouchableOpacity style={styles.icones} onPress={() => SelectItem(item)}>
                                    <Image source={icones.deletar} style={styles.icones}/>
                                </TouchableOpacity> : <TouchableOpacity style={styles.icones} disabled={true}>
                                    <Image source={icones.deletar} style={styles.iconesOpacity}/>
                                </TouchableOpacity>}

                            {item.servico === 'N' ?
                                <TouchableOpacity style={styles.icones} onPress={() => GetItem(item)}>
                                    <Image source={icones.servico} style={styles.icones}/>
                                </TouchableOpacity> : <TouchableOpacity style={styles.icones} disabled={true}>
                                    <Image source={icones.servico} style={styles.iconesOpacity}/>
                                </TouchableOpacity>}

                            {item.servico === 'N' ?
                                <TouchableOpacity style={styles.icones} onPress={() => MostraOrcamento(item)}>
                                    <Image source={icones.expandir} style={styles.icones}/>
                                </TouchableOpacity> : <TouchableOpacity style={styles.icones} disabled={true}>
                                    <Image source={icones.expandir} style={styles.iconesOpacity}/>
                                </TouchableOpacity>}
                        </View>
                    </View>
                    <View style={styles.boxValor}>
                        <Text style={styles.textData}>
                            {ConverteData(item.data)}
                        </Text>
                        <Text style={styles.textValor}>
                            Total:{' ' + ConverteValor(item.vlrTotal)}
                        </Text>
                    </View>
                </View>))}
            </ScrollView>
            <View style={styles.footer}>
                <Button texto={'+ Novo Orçamento'} onPress={() => props.navigation.navigate('Novoorcamento', item)}
                        isLoading={loading}></Button>
            </View>
        </View>
    )
}
export default DisplayOrcamento


