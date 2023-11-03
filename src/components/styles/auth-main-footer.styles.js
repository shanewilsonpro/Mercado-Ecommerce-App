import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    height: 80,
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: -30,
    marginHorizontal: SIZES.space15,
    paddingBottom: SIZES.space15,
    borderBottomLeftRadius: SIZES.radius10,
    borderBottomRightRadius: SIZES.radius10,
    backgroundColor: COLORS.light60,
    zIndex: 0,
  },
  BodyText: {
    color: COLORS.grey, 
    ...FONTS.body5
  },
  TextButtonContainer: {
    marginLeft: SIZES.space10,
    backgroundColor: null,
  },
  TextButtonLabel: {
    color: COLORS.support3,
    ...FONTS.h5,
  },
});