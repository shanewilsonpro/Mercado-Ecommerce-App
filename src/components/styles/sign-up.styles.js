import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    marginTop: SIZES.space15,
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
    lineHeight: 45,
    ...FONTS.h1,
  },
  ScrollViewContainer: {
    flexGrow: 1,
    marginTop: SIZES.space15,
    paddingBottom: SIZES.space15 * 2,
  },
  FormInputContainer: {
    marginVertical: SIZES.space8,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.error,
  },
  CountryDropDownContainer: {
    marginVertical: SIZES.space8,
  },
  CheckBoxContainer: {
    marginVertical: SIZES.space8,
  },
  CreateAccountButtonContainer: {
    height: 55,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.primary,
  },
  CreateAccountButtonLabel: {
    ...FONTS.h3,
  },
  IconContainer: {
    marginRight: SIZES.space10
  }
});
