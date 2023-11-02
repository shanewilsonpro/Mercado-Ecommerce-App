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
    height: 100,
    zIndex: 0,
    borderRadius: SIZES.radius10,
  },
});
