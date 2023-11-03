import { StyleSheet } from "react-native";
import { SIZES, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  TouchableContainer: {
    flexDirection: "row",
  },
  CheckBoxIconContainer: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius8,
    borderWidth: 3,
  },
  BodyText: {
    flex: 1,
    marginLeft: SIZES.space15,
    ...FONTS.body5,
    lineHeight: 20,
  },
});
