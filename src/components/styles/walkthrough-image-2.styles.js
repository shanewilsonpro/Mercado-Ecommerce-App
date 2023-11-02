import { StyleSheet } from "react-native";
import { SIZES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    overflow: "hidden",
  },
  Image: {
    position: "absolute",
    width: 86,
    height: 112,
    zIndex: 0,
    borderRadius: SIZES.radius10,
  },
  Image01: {
    top: "35%",
    left: "35%",
    width: 106,
    height: 161,
    zIndex: 1,
  },
  Image02: {
    top: "55%",
    left: "60%",
  },
});
