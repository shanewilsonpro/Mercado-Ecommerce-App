import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    height: 55,
    paddingHorizontal: SIZES.space15,
    borderRadius: SIZES.radius8,
    alignItems: "center",
    backgroundColor: COLORS.lightGrey,
  },
  Input: {
    flex: 1,
    paddingVertical: 0,
    ...FONTS.body3,
  }
});