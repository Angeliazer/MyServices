import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },

  containerScroll: {
    backgroundColor: COLORS.white,
    width: "95%",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 1,
    borderRadius: 6,
    marginBottom: 75,
  },

  linha: {
    padding: 5,
    fontSize: 18,
    Color: "red",
    fontStyle: "italic",
    marginTop: 6,
  },

  cabecalho: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  containerLinha: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 6,
    padding: 5,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.mediumGray,
  },

  titulo: {
    fontSize: FONT_SIZE.lg,
    marginTop: 5,
    color: COLORS.gray,
  },

  logoTipo: {
    width: 25,
    height: 25,
    marginTop: 14,
    marginLeft: 3,
  },


  logoNormal: {
    width: 28,
    height: 28,
    marginTop: 6,
    padding: 12
  },

  containerNome: {
    width: "65%"
  },

  containerLogo: {
    width: "37%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 8,
  },

  space60: {
    width: "60%",
  },

  space90: {
    width: "90%",
  },

  space10: {
    width: "10%",
  },

  boxPesquisa: {
    flexDirection: "row",
    width: "95%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },

  nome: {
    justifyContent: "space-betweew",
    padding: 5,
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

  footer: {
    position: "absolute",
    marginBottom: 40,
    bottom: 0,
    padding: 10,
    width: "100%",
  },
};
