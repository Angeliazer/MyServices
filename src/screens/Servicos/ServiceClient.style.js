import {FONT_SIZE, COLORS} from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },

    containerLoading: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255, 0, 0.5)", // fundo semi-transparente
        zIndex: 1, // Certifique-se que fica acima do conteúdo
    },

    mensagem: {
        marginTop: 30,
        color: COLORS.blueNovo,
        textAlign: 'center',
        fontSize: 18,
    },

    text: {
        color: COLORS.gray,
        fontSize: FONT_SIZE.xm,
    },

    nome: {
        color: COLORS.black,
        fontSize: FONT_SIZE.xm,
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
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        margin: 'auto',
        marginBottom: 75,
    },

    boxServico: {
        borderWidth: 0.2,
        borderRadius: 6,
        width: '100%',
        backgroundColor: COLORS.grayNovo,
        padding: 10,
        margin: 'auto',
        margimBottom: 5,
        marginTop: 5,
        alignItems: 'space-between',
        flexDirection: 'column',

    },
    boxLinhaUm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
    },

    boxOsData: {
        flexDirection: 'row',
        width: '70%',
    },

    boxIcones: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxLinhaDois: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxDataFim: {
        width: '50%',
        alignItems: 'flex-start',
    },

    boxTotal: {
        width: '50%',
        alignItems: 'flex-end',
    },

    boxLinhaTres: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxSituacao: {
        width: '61%',
        justifyContent: 'flex-start'
    },

    boxSaldo: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'flex-end'
    },

    icones: {
        width: 25,
        height: 25,
        paddingRight: 8,
        paddingLeft: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    textLinha: {
        fontSize: FONT_SIZE.md,
        paddingTop: 5,
        paddingBottom: 5
    },

    textOs: {
        fontSize: FONT_SIZE.md,
        paddingRight: 5,
    },

    textLinhaVermelha: {
        fontSize: FONT_SIZE.md,
        paddingTop: 5,
        paddingBottom: 5,
        color: COLORS.red,
    },

    textLinhaAzul: {
        fontSize: FONT_SIZE.md,
        paddingTop: 5,
        paddingBottom: 5,
        color: COLORS.blueNovo,
    }


}