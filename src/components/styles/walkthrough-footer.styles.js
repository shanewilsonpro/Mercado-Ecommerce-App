import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  DotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Dots: {
    borderRadius: 5,
    marginHorizontal: 6,
    width: 10,
    height: 10,
  },
  Container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SIZES.height * 0.2,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.space15,
    paddingVertical: SIZES.height > 700 ? SIZES.space10 : 20,
  },
  ButtonsContainer: {
    flexDirection: "row",
    height: 55,
  },
  JoinNowButtonContainer: {
    flex: 1,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.lightGrey,
  },
  JoinNowButtonLabel: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  LogInButtonContainer: {
    flex: 1,
    marginLeft: SIZES.space15,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.primary,
  },
  LoginButtonLabel: {
    ...FONTS.h3,
  },
});
