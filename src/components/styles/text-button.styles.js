import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  TouchableContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  LabelText: {
    color: COLORS.secondary,
    ...FONTS.h3,
  },
});
