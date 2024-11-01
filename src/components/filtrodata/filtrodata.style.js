import { FONT_SIZE, COLORS } from "../../constants/theme";

export const styles = {
  container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
      paddingLeft: 12,
      marginTop: 8
  },

  input: {
      width: '33%',
    //   borderColor:  COLORS.gray,
     // borderWidth: 1,
      borderRadius: 5,
      padding: 8,
      textAlign: 'center',
      color: COLORS.blueNovo,
      fontSize: 16,
      marginRight: 5,
      backgroundColor: COLORS.graySpecial
  },

  button:{
    width: '27%',
    marginRight: 20,
    backgroundColor:  COLORS.blueNovo,
    borderRadius: 6,
  },

  texto:{
    padding: 7,
    fontSize: 18,
    color: COLORS.white,
    textAlign: 'center'
  },

}