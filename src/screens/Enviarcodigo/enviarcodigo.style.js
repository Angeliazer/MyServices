import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  containerCodigo: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
  },

  titulo: {
    padding: 20,
    fontSize: FONT_SIZE.lg,
    textAlign: "center",
    color: COLORS.gray,
    marginBottom: 20,
    marginTop: 40,
  },

  buttom: {
    width: "90%",
    marginTop: 30,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: COLORS.darkBlue,
    padding: 10,
    borderRadius: 8,
  },

  textButton: {
    textAlign: "center",
    fontSize: FONT_SIZE.xm,
    color: COLORS.white,
  },
};
