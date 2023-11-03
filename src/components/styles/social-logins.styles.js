import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -30,
    zIndex: -1,
  },
  OrLoginText: {
    color: COLORS.dark,
    ...FONTS.body3,
  },
  ButtonsContainer: {
    flexDirection: "row",
    marginTop: SIZES.radius10,
  },
  IconButtonContainer: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.grey20,
    marginHorizontal: SIZES.space4,
  },
});
