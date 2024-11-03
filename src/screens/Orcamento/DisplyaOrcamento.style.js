import {FONT_SIZE, COLORS} from "../../constants/theme"

export const styles = {

    container: {
        flex: 1,
    },

    containerLoading: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // fundo semi-transparente
        zIndex: 1, // Certifique-se que fica acima do conteúdo
    },

    boxMensagem: {
        width: '90%',
        height: '20%',
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderWidth: 0.2,
        borderRadius: 6,
    },

    boxButton: {
        flexDirection: 'row',
        alignItems: "center",
        width: '80%',
        margin: 'auto',
        padding: 10,
        justifyContent: 'space-between',
    },

    boxSim:{
        width:'45%',
        backgroundColor: COLORS.blueNovo,
        padding: 10,
        borderRadius: 6,
    },

    boxNao:{
        width:'45%',
        backgroundColor: COLORS.red,
        padding: 10,
        borderRadius: 6,
    },

    textButton: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.white,
        textAlign: "center",
    },

    mensagem: {
        marginTop: 30,
        color: COLORS.white,
        textAlign: 'center',
        fontSize: 18,

    },

    text: {
        color: COLORS.gray,
        fontSize: FONT_SIZE.lg,
    },

    nome: {
        color: COLORS.black,
        fontSize: FONT_SIZE.lg,
    },

    boxTitulo: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },

    containerScroll: {
        width: "100%",
        padding: 10,
        marginTop: 20,
        marginBottom: 5,
    },

    containerOrcamento: {
        width: '100%',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 10,
        height: 85,
        marginTop: 10,
        margin: 'auto',
        borderWidth: 0.2,
        borderRadius: 6,
        backgroundColor: COLORS.mediumGray
    },

    footer: {
        marginBottom: 70,
        width: '90%',
        margin: 'auto'
    },

    boxData: {
        flexDirection: 'row',
        width: '65%',
        paddingRight: 10
    },

    boxIcones: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '35%',
        marginLeft: 'auto',
        justifyContent: 'flex-end',
    },

    boxDados: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    boxValor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
    },

    icones: {
        width: 25,
        height: 25,
        justifyContent: 'space-between',
        margin: 'auto'
    },

    iconesOpacity: {
        width: 25,
        height: 25,
        justifyContent: 'space-between',
        margin: 'auto',
        opacity: 0.5
    },

    textValor: {
        fontSize: FONT_SIZE.md,
    },

    textData: {
        fontSize: FONT_SIZE.md,
        marginRight: 15
    },

    textOrca: {
        fontSize: FONT_SIZE.md
    },

}