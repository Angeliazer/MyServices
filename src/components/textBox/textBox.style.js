import {COLORS, FONT_SIZE} from '../../constants/theme.js'

export const styles = {
    login: {
        width: '80%',
        height: '50%', 
        backgroundColor: COLORS.white,
        marginTop: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 6,
        flex: 1
    },

    alinha:{
        textAlign: 'right',
        paddingRight: 8
    },

    input: {
        width:'100%',
        paddingTop: 10,
        paddingBottom: 10,
        //backgroundColor: COLORS.grayNovo,
        marginBottom: 10,
        fontSize: FONT_SIZE.md,
        borderRadius: 6,
        paddingLeft: 10,
        borderWidth: 0.2,
        borderColor: COLORS.gray
    },

    label: {
        width:'100%',
        color: COLORS.gray,
        margin: 'auto',
        fontSize: FONT_SIZE.md,
        paddingLeft: 5,
        marginBottom: 5
    },

}