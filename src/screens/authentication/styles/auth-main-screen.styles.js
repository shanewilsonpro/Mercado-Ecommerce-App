import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    paddingHorizontal: SIZES.space15,
    backgroundColor: COLORS.lightGrey,
  },
  LogoImage: {
    alignSelf: "center",
    marginTop: SIZES.space15 * 2,
    width: 50,
    height: 50,
  },
});
