import {COLORS, FONT_SIZE} from '../../constants/theme.js'

export const styles = {

    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },

    contain:{
        width: '100%',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
    },

    slideBox:{
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        opacity: 0.7
    },

    direita: {
        position: 'absolute',
        top: 190,
        right: 10,
        opacity: 0.6
    },

    esquerda: {
        position: 'absolute',
        top: 190,
        left: 10,
        opacity: 0.6
    },

    seta:{
        width: 20,
        height: 20,
    },

    fotoSlide:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.mediumGray,
        padding: 10,
        borderRadius: 8,
        marginRight: 30,
        width: 130,
    },

    textFoto: {
        fontSize: FONT_SIZE.md,
        textAlign: 'center',
        color: COLORS.blue,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 8,
    },

    logo: {
        width: 60,
        height: 60,
    },

    textButton:{
        textAlign: 'center',
        fontSize: FONT_SIZE.xm,
        color: COLORS.white
    },

    footer:{
        position: "absolute",
        bottom: 80,
        width: "100%",
        padding: 20
    },

}