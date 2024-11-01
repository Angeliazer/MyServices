import {COLORS, FONT_SIZE} from '../../constants/theme.js'
export const styles = { 

    container:{
        backgroundColor: COLORS.blueNovo,
    },
    
   logoTipo: {
        width: 32,
        height: 32,
        padding: 20,
   },

   usuario: {
        fontSize: FONT_SIZE.md,
        flexDirection: 'row',
        textAlign: 'left',
        fontStyle: 'italic',
        color: COLORS.white,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'right',
        paddingRight: 5
   },

   texto: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.blue,
        fontWeight: 'bold',
    },

    headers: {
        flexDirection: 'row',
        backgroundColor: COLORS.blueNovo,
        alignItems: 'space-between',
        paddingTop: 15,
        paddingRight: 20
    }

}