import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  TouchableContainer: {
    flexDirection: "row",
    height: SIZES.height > 800 ? 55 : 45,
    paddingHorizontal: SIZES.space15,
    borderRadius: SIZES.radius10,
    alignItems: "center",
    backgroundColor: COLORS.lightGrey,
  },
  DropDownBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  CountryText: {
    color: COLORS.grey60,
    ...FONTS.body3,
  },
  FlagImage: {
    width: 30,
    height: 30,
    borderRadius: SIZES.radius75,
  },
  CountryNameText: {
    flex: 1,
    marginLeft: SIZES.space15,
    ...FONTS.h3,
  },
});
