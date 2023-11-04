import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    paddingTop: SIZES.space15 * 3,
    paddingBottom: SIZES.space10,
    paddingHorizontal: SIZES.space15,
    alignItems: "center",
    backgroundColor: COLORS.light,
    zIndex: 1,
  },
  TitleText: {
    flex: 1,
    marginLeft: SIZES.space10,
    ...FONTS.h2,
  },
});
