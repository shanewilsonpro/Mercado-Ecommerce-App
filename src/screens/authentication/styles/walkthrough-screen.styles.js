import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  WalkthroughItemContainer: {
    width: SIZES.width,
    justifyContent: "center",
  },
  WalkthroughImagesContainer: {
    flex: 1,
    justifyContent: "center",
  },
  TitleAndDescContainer: {
    height: SIZES.height * 0.35,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: SIZES.space15,
  },
  TitleText: {
    ...FONTS.h1,
  },
  DescriptionText: {
    marginTop: SIZES.space15,
    textAlign: "center",
    ...FONTS.body3,
    color: COLORS.grey,
  },
});
