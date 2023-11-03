import { StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.dark80,
  },
  ListContainer: {
    height: 400,
    width: SIZES.width * 0.8,
    backgroundColor: COLORS.light,
    borderRadius: SIZES.radius10,
  },
  FlatListContainer: {
    paddingHorizontal: SIZES.space15,
    paddingBottom: SIZES.space15,
  },
  TouchableContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.space15,
  },
  FlagImage: {
    width: 30,
    height: 30,
  },
  CountryText: {
    flex: 1,
    marginLeft: SIZES.space15,
    ...FONTS.body3,
  },
});
