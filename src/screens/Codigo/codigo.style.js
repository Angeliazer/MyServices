import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    width: "100%",
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  containerInput: {
    flexDirection: "row",
  },

  input: {
    backgroundColor: COLORS.lightGray,
    width: 50,
    height: 80,
    textAlign: "center",
    fontSize: FONT_SIZE.xl,
    borderWidth: 1,
    borderColor: COLORS.blue,
    borderRadius: 6,
    marginBottom: 80,
    marginTop: 20,
    marginRight: 10,
  },
};
