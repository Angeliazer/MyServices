import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  containerLogin: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: COLORS.white,
  },

  titulo: {
    padding: 40,
    fontSize: FONT_SIZE.xl,
    textAlign: "center",
    // textShadowColor: '#00000',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 3,
    fontWeight: "bold",
    color: COLORS.blueNovo,
  },

  textButton: {
    textAlign: "center",
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
  },

  novaSenha: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  img: {
    width: 30,
    height: 30,
  },

  textFooter: {
    marginTop: 200,
    fontSize: FONT_SIZE.sp,
    textAlign: 'center',
    color: COLORS.gray,
  },

  footer: {
    width: "100%",
  },

  boxUser:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: 20
  },

  texto:{
    width: '90%'
  },

  imagem:{
    // width: '9%',
    paddingTop: 12,
  },

  cadeado:{
    width: 30,
    height: 30,
  },

  email:{
    width: 30,
    height: 30,
  },

  semConta:{
    flexDirection: 'row',
    width: '100%',
    marginTop: 200,
    justifyContent: 'center',
  },

  text:{
    fontSize: FONT_SIZE.md,
    color:  COLORS.gray,
    padding: 6,
    fontStyle: 'italic'
  },

  corClick:{ 
    color: COLORS.blueNovo,
  },

  redefinir:{
    width: '100%',
    margin:'auto',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },

  textRedef: {
  fontSize: FONT_SIZE.md,
    color:  COLORS.gray,
    padding: 6,
    fontStyle: 'italic'
  }


}
