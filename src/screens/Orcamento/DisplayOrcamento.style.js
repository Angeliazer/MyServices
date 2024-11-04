
import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    container: {
        justifyContent: "space-between",
        backgroundColor: COLORS.white,
    },

    containerPrincipal: {
        justifyContent: "space-between",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        marginTop: 8,
    },

    boxDescricao: {
    },

    textCobranca: {
        fontSize: FONT_SIZE.md,
        marginLeft: 12,
        color: COLORS.red,
        marginBottom: 2,
        alignText: "center",
    },

    textClick: {
        flexDirection: "row",
        justifyContent: "center",
    },

    contain: {
        width: "100%",
        flexDirection: "row",
    },

    SlideBox: {
        width: "100%",
        paddingRight: 2,
        paddingLeft: 2,
    },

    buttonAdiciona: {
        width: "30%",
        backgroundColor: COLORS.blueNovo,
        borderRadius: 6,
        justifyContent: "center",
        height: 40,
        alignItems: "center",
        marginTop: 13,
    },

    text: {
        fontSize: FONT_SIZE.md,
        color: COLORS.white,
        padding: 8,
        textAlign: "center",
    },

    button: {
        borderRadius: 6,
        backgroundColor: COLORS.blueNovo,
        width: 100,
        marginRight: 5,
    },

    boxServico: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: 10,
        alignItems: "center",
    },

    cliente: {
        flexDirection: "row",
        alignItems: "center",
        fontSize: FONT_SIZE.lg,
    },

    titulo: {
        padding: 5,
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray,
    },

    nome: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.blue,
    },

    quant: {
        width: "22%",
    },

    valor: {
        width: "30%",
    },

    containerScroll: {
        marginLeft: 8,
        marginRight: 8,
        borderColor: COLORS.white,
        marginTop: 8,
        height: "25%",
    },

    linha: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 5,
        paddingTop: 12,
        paddingRight: 10,
        alignItems: "center",
        backgroundColor: COLORS.mediumGray,
        paddingBottom: 10,
        borderRadius: 5,
        width: '98%',
        marginLeft: 5,
        marginBottom: 10,
        borderWidth: 0.2,
        borderColor: COLORS.gray
    },

    setas:{
        width: 12,
        height: 12,
    },



    logoLixeira: {
        width: 23,
        height: 23,
    },

    textLinha: {
        fontSize: FONT_SIZE.md,
        textAlign: "right",
    },

    textValor: {
        fontSize: FONT_SIZE.md,
        textAlign: "right",
        marginRight: 5,
    },

    textDescricao: {
        fontSize: FONT_SIZE.md,
        textAlign: "left",
    },

    space35: {
        width: "35%",
    },

    space12: {
        width: "12%",
    },

    space20: {
        width: "20%",
    },

    space25: {
        width: "25%",
    },

    containerFooter: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
    },

    total: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 5,
    },

    textTotal: {
        fontSize: FONT_SIZE.md,
        color: COLORS.black,
        fontStyle: "italic",
    },
};
