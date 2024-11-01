import {COLORS, FONT_SIZE} from "../../constants/theme"

export const styles = {
    container: {
        width: "100%",
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

    containerPesquisa: {
        flexDirection: "row",
        width: "100%",
        margin: "auto",
        marginTop: 5,
        alignItems: "center",
        justifyContent: "space-between",
    },

    containerScroll: {
        width: "98%",
        margin: "auto",
        marginTop: 15,
        borderRadius: 8,
    },

    footer: {
        marginBottom: 60,
    },

    image: {
        width: 25,
        height: 25,
    },

    boxValor: {
        marginLeft: "auto",
        marginRight: 15,
    },

    boxNome: {
        marginLeft: 5,
    },

    boxData: {
        marginLeft: 5,
    },

    boxImage: {
        marginLeft: "auto",
    },

    idOrcamento: {
        paddingLeft: 8,
        marginRight: 10,
    },

    boxNomeImage: {
        flexDirection: "row",
        width: "100%",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 3,
        alignItems: "center",
    },

    boxDataValor: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "auto",
        paddingLeft: 8,
    },

    boxContainer: {
        width: "95%",
        height: 75,
        backgroundColor: COLORS.mediumGray,
        margin: "auto",
        borderRadius: 6,
        marginBottom: 5,
        borderWidth: 0.2,
        boderColor: COLORS.gray,
    },

    texto: {
        fontSize: FONT_SIZE.md,
    },

    textoNome: {
        fontSize: FONT_SIZE.lg,
    },

    boxDataInvalida: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(1, 1, 1, 0.5)", // fundo semi-transparente
        zIndex: 1, // Certifique-se que fica acima do conteúdo
    },

    boxDataModal: {
        width: 300,
        padding: 15,
        backgroundColor: COLORS.white,
        borderRadius: 6,
        alignItems: "center",
    },

    boxButton: {
        width: "50%",
    },

    texto1: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.red,
    },

    texto2: {
        fontSize: FONT_SIZE.md,
    },
}
