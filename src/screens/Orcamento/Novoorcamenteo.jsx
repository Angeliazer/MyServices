import { View, Text, TouchableOpacity, ScrollView, Keyboard, Image, Alert } from 'react-native'
import icones from '../../constants/icones'
import { styles } from './novoorcamento.style'
import Titulo from '../../components/titulo/titulo'
import Header from '../../components/header/header'
import { AuthContext } from '../../context/Auth'
import { useContext, useState, useRef } from 'react'
import TextBox from '../../components/textBox/textBox'
import { Button } from '../../components/button/buton'
import api from '../../axios-instance'
import { LoadStorage } from '../../storage/storage'
import { Orcamento } from '../../models/model.orcamento/model.orcamento'
// import { ConverteValor } from '../../funcoes/funcaoConversao'

const Novoorcamento = (props) => {

    const item = props.route.params

    const { apelido } = useContext(AuthContext)
    const [quant, setQuant] = useState('')
    const [descricao, setDescricao] = useState('')
    const [empreitada, setEmpreitada] = useState(false)
    const [data, setData] = useState([])
    const [tipo, setTipo] = useState('')
    const [mostra, setMostra] = useState('0,00')

    const [total, setTotal] = useState(0.00)
    const [valor, setValor] = useState(0.00)

    const [labelQuant, setLabelQuant] = useState('Qtd')
    const [labelValor, setLabelValor] = useState('Vlr')

    const navigation = props.navigation

    const [id, setId] = useState(1)

    const quantRef = useRef(null)
    const descricaoRef = useRef(null)

    let vlr_unitario_item = 0
    let vlr_total_item = 0

    const FormaCobranca = (forma) => {

        if (forma !== 'EP') {
            setQuant('')
            setEmpreitada(false)
            setLabelQuant(`Qtd. ${forma}`)
            setLabelValor(`Vlr ${forma}`)
            if (quantRef.current) {
                quantRef.current.focus()
            }
        }
        else {
            setQuant('1')
            setEmpreitada(true)
            setLabelQuant('Nro')
            setLabelValor('Vlr. Emp.')

        }
        setTipo(forma)
    }

    const FormatCurrency = (text) => {
        const cleanText = text.replace(/\D/g, '')
        const decimalText = (cleanText / 100).toFixed(2)
        return decimalText.replace('.', ',')
    }

    const FormataNro = (text) => {
        const nroFormatado = FormatCurrency(text)
        setValor(nroFormatado)
    }


    const FormataTotal = (totalItem) => {
        let vlr = parseFloat(totalItem)
        vlr = vlr.toFixed(2).replace('.', ',')
        vlr = parseFloat(vlr.replace(',', '.')).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
        return vlr
    }

    const StrToDecTotalItem = (und, vlr) => {
        und = parseInt(und)
        vlr = vlr.replace(',', '')
        vlr = parseInt(vlr) / 100
        vlr = und * vlr
        vlr = (vlr).toFixed(2)
        vlr = parseFloat(vlr)
        return (vlr)
    }

    const StrToDec = (vlr) => {
        vlr = vlr.replace(',', '')
        vlr = parseInt(vlr) / 100
        return vlr
    }

    const AdicionaOrc = () => {
        if (descricao != '' && valor != '' && quant != '' && tipo != '') {

            vlr_unitario_item = StrToDec(valor)
            vlr_total_item = StrToDecTotalItem(quant, valor)

            setTotal(prevTotal => prevTotal + vlr_total_item)  // Corrigido para incrementar corretamente
            setMostra(FormataTotal(total + vlr_total_item))  // Mostrando o valor atualizado

            setData(prevData => [...prevData, { item: id, descricao, quant: parseInt(quant), tipo, valor: vlr_unitario_item, total: vlr_total_item }])
            setId(prevId => (prevId + 1))

            setQuant(0)
            setValor('')
            setTipo('')

            if (descricaoRef.current) {
                descricaoRef.current.focus()
            }
        }
    }

    const DeletaItem = (item) => {
        setTotal(prevTotal => prevTotal - item.total)  // Corrigido para subtrair corretamente
        setMostra(FormataTotal(total - item.total))  // Mostrando o valor atualizado
        setData(data.filter(indice => indice.item !== item.item))
    }

    const Onfocus = () => {
        setDescricao('')
        setTipo('')
        setQuant('')
        setValor('')
        setLabelQuant('Qtd')
        setLabelValor('Vlr')
    }

    const SalvarOrcamento = async () => {

        const idCliente = props.route.params.idCliente
        const idUsuario = props.route.params.idUsuario

        //....Monta Objeto para Api
        const orca = new Orcamento()

        orca.idCliente = idCliente
        orca.idUsuario = idUsuario
        orca.vlrTotal = total
        orca.data = new Date().toISOString().split('T')[0];
        orca.items = []

        for (let x = 0; x < data.length; x++) {

            // Itens enviados para Api { descricao, valor, total, quant, tipo }
            // Não envia o par 'item : nro' - > gerado automaticamente na hora de gravar os dados na Api
            orca.items.push({
                descricao: data[x].descricao,
                valor: data[x].valor, total: data[x].total, quant: data[x].quant, tipo: data[x].tipo
            })
        }

        try {
            const usuario = await LoadStorage()

            const token = usuario.token

            const response = await api.post('/orcamento/Add', orca, { headers: { 'Authorization': `Bearer ${token}` } })

            if (response.status == 201) {
                Alert.alert(
                    'Atenção',
                    'Registro Gravado com Sucesso...!',
                    [{
                        text: 'Ok',
                        onPress: () => navigation.navigate('Orcamento')
                    }]
                )
            }

        } catch (error) {
            {
                Alert.alert(
                    'Erro',
                    'Não foi possível gravar o registro, tente mais tarde!',
                    [{
                        text: 'Ok',
                        onPress: () => navigation.navigate('Orcamento')
                    }]
                )
            }
        }

    }

    return <View style={styles.container}>
        <Header texto={apelido} />

        <Titulo titulo={'Novo Orçamento'} image={icones.orca2} back={icones.back} tela={'Orcamento'} navigation={props.navigation} item={item} />

        <View style={styles.containerPrincipal}>

            <View style={styles.cliente}>
                <Text style={styles.titulo}>
                    Cliente:
                </Text>
                <Text style={styles.nome}>
                    {props.route.params.nome}
                </Text>
            </View>

            <View style={styles.boxDescricao}>
                <TextBox label='Descrição'
                    placeholder='Descrição do Servico...'
                    maxLength={50}
                    value={descricao}
                    onChangeText={(e) => setDescricao(e)}
                    referencia={descricaoRef}
                    onFocus={Onfocus}
                />
            </View>

            <View style={styles.textClick}>
                <Text style={styles.textCobranca}>
                    <Image source={icones.setaEsquerda} style={styles.setas} />
                    Click Forma de Cobrança (FC)
                    <Image source={icones.setaDireita} style={styles.setas} />
                </Text>
            </View>

            <View style={styles.SlideBox}>
                <ScrollView horizontal={true} style={styles.contain} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() => FormaCobranca('EP')} style={styles.button}>
                        <Text style={styles.text}>Empreitada</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => FormaCobranca('DD')} style={styles.button}>
                        <Text style={styles.text}>Dia</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => FormaCobranca('HH')} style={styles.button}>
                        <Text style={styles.text}>Hora</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => FormaCobranca('M2')} style={styles.button}>
                        <Text style={styles.text}>M2</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => FormaCobranca('ML')} style={styles.button}>
                        <Text style={styles.text}>ML</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.boxServico}>

                <View>
                    <TextBox label='FC'
                        value={tipo}
                        alinha
                        editable={false}
                        onChangeText={(e) => setTipo(e)}
                    />
                </View>

                <View style={styles.quant}>
                    <TextBox label={labelQuant}
                        maxLength={5}
                        value={quant}
                        tipoTeclado='number-pad'
                        alinha
                        onChangeText={(e) => setQuant(e)}
                        editable={!empreitada}
                        referencia={quantRef}
                    />
                </View>

                <View style={styles.valor}>
                    <TextBox label={labelValor}
                        maxLength={12}
                        value={valor}
                        tipoTeclado='number-pad'
                        alinha
                        onChangeText={FormataNro} />
                </View>

                <TouchableOpacity style={styles.buttonAdiciona} onPress={AdicionaOrc}>
                    <Text style={styles.text}>+ Adiciona</Text>
                </TouchableOpacity>

            </View>

        </View>


        <ScrollView style={styles.containerScroll} showsVerticalScrollIndicator={false} ins>

            {data.map((item) => (
                <View key={item.item} style={styles.linha}>
                    <View style={styles.space35}>
                        <Text style={styles.textDescricao}>
                            {item.descricao}
                        </Text>
                    </View>

                    <View style={styles.space20}>
                        <Text style={styles.textLinha}>
                            {item.quant}
                        </Text>
                    </View>

                    <View style={styles.space12}>
                        <Text style={styles.textLinha}>
                            {item.tipo}
                        </Text>
                    </View>

                    <View style={styles.space25}>
                        <Text style={styles.textValor}>
                            {FormataTotal(item.valor)}
                        </Text>
                    </View>

                    <TouchableOpacity onPress={() => DeletaItem(item)}>
                        <Image source={icones.deletar} style={styles.logoLixeira} />
                    </TouchableOpacity>
                </View>
            ))}
        </ScrollView>

        <View style={styles.containerFooter}>
            <View style={styles.total}>
                <Text style={styles.textTotal}>
                    Total: R$ {mostra}
                </Text>
            </View>
            <Button texto='Salva Orçamento' onPress={SalvarOrcamento} colorRed={false}
                isLoading={data.length == 0 ? true : false} ></Button>
        </View>
    </View>
}

export default Novoorcamento