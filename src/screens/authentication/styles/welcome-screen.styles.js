import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../theme/theme";

export const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  LogoAndTitleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  LogoImage: {
    width: 150,
    height: 150,
  },
  TitleText: {
    marginTop: SIZES.space10,
    ...FONTS.h1,
  },
  FooterButtonsContainer: {
    paddingHorizontal: SIZES.space20,
    marginBottom: SIZES.space32,
  },
  GetStartedButtonContainer: {
    height: 50,
    borderRadius: SIZES.radius8,
  },
  AlreadyAccountButtonContainer: {
    height: 50,
    marginTop: SIZES.space10,
    backgroundColor: null,
  },
  AlreadyAccountText: {
    color: COLORS.primary,
  },
});
