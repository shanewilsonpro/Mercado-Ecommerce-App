import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    height: 90,
    paddingTop: SIZES.space10,
    paddingHorizontal: SIZES.space10,
    backgroundColor: COLORS.light,
  },
});
