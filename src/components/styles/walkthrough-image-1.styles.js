import { StyleSheet } from "react-native";
import { SIZES } from "../../theme/theme";

export const styles = StyleSheet.create({
  Row1ImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  Row1Image: {
    width: 110,
    height: 110,
  },
  Row2ImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
  },
  Row2Image: {
    width: 110,
    height: 110,
  },
  Slider2: {
    marginTop: SIZES.space15,
    transform: [{ rotate: "180deg" }],
  },
});