import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    width: 300,
    padding: 15,
    backgroundColor: COLORS.mediumGray,
    borderRadius: 6,
    alignItems: "center",
  },

  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  buttonCancel: {
    backgroundColor: COLORS.red,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  buttonConfirm: {
    backgroundColor: COLORS.green,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },

  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
  },
};
