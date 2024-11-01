import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 50,
    alignItems: "center",
    width: "100%",
  },

  cancelar: {
    width: "40%", // Ajuste a largura dos botões
    backgroundColor: COLORS.darkRed,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginLeft: 10,
  },

  salvar: {
    width: "40%", // Ajuste a largura dos botões
    backgroundColor: COLORS.darkBlue,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginRight: 10,
  },

  texto: {
    fontSize: FONT_SIZE.xm,
    color: COLORS.white,
  },

  nomes: {
    width: "95%",
    //flexDirection: 'row',
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    marginTop: 30,
  },

  linha90: {
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
  },

  nomes70: {
    width: "95%",
  },

  nomes30: {
    width: "28%",
  },

  containerEndereco: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    margin: "auto",
  },

  linha75: {
    width: "80%",
    marginRight: 5,
  },

  linha15: {
    width: "15%",
  },

  linha60: {
    width: "60%",
  },

  linha40: {
    width: "30%",
    marginRight: 5,
  },
};
