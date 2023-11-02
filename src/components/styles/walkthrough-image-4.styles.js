import { StyleSheet } from "react-native";
import { SIZES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    overflow: "hidden",
  },
  Image: {
    position: "absolute",
    width: 120,
    height: 112,
    borderRadius: SIZES.radius10,
  },
  Image01: {
    top: "17%",
    left: "23%",
    width: 200,
    height: 291,
    zIndex: 0,
  },
});
