import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../../theme/theme";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Camera: {
    flex: 1,
  },
  ButtonContainer: {
    position: "absolute",
    alignItems: "center",
    bottom: SIZES.space15,
    left: 0,
    right: 0,
  },
  MotiSearchingTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.dark60,
  },
  SearchingText: {
    ...FONTS.h2,
    color: COLORS.light,
  },
  ScanIconButton: {
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.light,
  },
  ProductCardContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 120,
    paddingVertical: SIZES.space10,
    alignItems: "center",
    zIndex: 1,
  },
  TouchableProductCard: {
    flex: 1,
    flexDirection: "row",
    width: SIZES.width - SIZES.space15 * 2,
    alignItems: "center",
    paddingHorizontal: SIZES.space10,
    borderRadius: SIZES.radius10,
    backgroundColor: COLORS.light,
  },
  ProductImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  ProductNameSKUTextsContainer: {
    flex: 1,
    marginLeft: SIZES.space10,
  },
  ProductNameText: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  ProductSKUText: {
    ...FONTS.body4,
  },
  PriceText: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  CameraFrameContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ScanTextContainer: {
    position: "absolute",
    top: "15%",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  ScanText: {
    ...FONTS.h1,
    color: COLORS.light,
  },
  BodyTextContainer: {
    position: "absolute",
    top: SIZES.height * 0.3 + 220,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  BodyText: {
    ...FONTS.body3,
    color: COLORS.light,
  },
});
