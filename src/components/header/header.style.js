import {COLORS, FONT_SIZE} from '../../constants/theme.js'

export const styles = {

    container: {
        backgroundColor: COLORS.blueNovo,
    },

    logoTipo: {
        width: 32,
        height: 32,
        paddingTop: 5,
    },

    usuario: {
        fontSize: FONT_SIZE.md,
        fontStyle: 'italic',
        color: COLORS.white,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingBottom: 2,
        paddingRight: 5
    },

    texto: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.white,
        fontWeight: 'bold',
    },

    headers: {
        flexDirection: 'row',
        backgroundColor: COLORS.blueNovo,
        alignItems: "space-between",
        paddingRight: 10,
        paddingBottom: 10,
    }

}