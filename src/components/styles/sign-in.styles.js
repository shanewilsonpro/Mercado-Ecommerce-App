import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    marginTop: SIZES.space15,
    height: SIZES.height * 0.55,
  },
  AuthContainer: {
    flex: 1,
    width: SIZES.width - SIZES.space15 * 2,
    padding: SIZES.space15,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.light,
    zIndex: 1,
  },
  TitleText: {
    width: "60%",
    lineHeight: 45,
    color: COLORS.dark,
    ...FONTS.h1,
  },
  ScrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  FormInputContainer: {
    marginVertical: SIZES.space8,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.error,
  },
  FormIcon: {
    marginRight: SIZES.space10,
  },
  ForgotPasswordButtonContainer: {
    marginTop: SIZES.space15,
    backgroundColor: null,
  },
  ForgotPasswordButtonLabel: {
    color: COLORS.support3,
    ...FONTS.h4,
  },
  LoginButtonContainer: {
    height: 55,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.primary,
  },
  LoginButtonLabel: {
    ...FONTS.h3,
  },
});
