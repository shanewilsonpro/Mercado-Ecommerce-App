import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
  // global font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // space size
  space2: 2,
  space4: 4,
  space8: 8,
  space10: 10,
  space12: 12,
  space15: 15,
  space16: 16,
  space18: 18,
  space20: 20,
  space24: 24,
  space28: 28,
  space32: 32,
  space36: 36,

  // font sizes
  size8: 8,
  size10: 10,
  size12: 12,
  size14: 14,
  size16: 16,
  size18: 18,
  size20: 20,
  size24: 24,
  size30: 30,

  // radius sizes
  radius4: 4,
  radius8: 8,
  radius10: 10,
  radius15: 15,
  radius20: 20,
  radius25: 25,
  radius50: 50,
  radius75: 75,

  // app dimensions
  width,
  height,
};

export const COLORS = {
  // Error
  error: "rgba(246, 86, 93, 1)",
  error80: "rgba(246, 86, 93, 0.8)",
  error60: "rgba(246, 86, 93, 0.6)",
  error20: "rgba(246, 86, 93, 0.2)",
  error08: "rgba(246, 86, 93, 0.08)",

  // Primary
  primary: "rgba(78, 85, 175, 1)",
  primary80: "rgba(78, 85, 175, 0.8)",
  primary60: "rgba(78, 85, 175, 0.6)",
  primary20: "rgba(78, 85, 175, 0.2)",
  primary08: "rgba(78, 85, 175, 0.08)",

  // Secondary
  secondary: "rgba(161, 219, 245, 1)",
  secondary80: "rgba(161, 219, 245, 0.8)",
  secondary60: "rgba(161, 219, 245, 0.6)",
  secondary20: "rgba(161, 219, 245, 0.2)",
  secondary08: "rgba(161, 219, 245, 0.08)",

  // Success
  success: "rgba(253, 212, 70, 1)",
  success80: "rgba(253, 212, 70, 0.8)",
  success60: "rgba(253, 212, 70, 0.6)",
  success20: "rgba(253, 212, 70, 0.2)",
  success08: "rgba(253, 212, 70, 0.08)",

  // Dark
  dark: "rgba(13, 15, 35, 1)",
  dark80: "rgba(13, 15, 35, 0.8)",
  dark60: "rgba(13, 15, 35, 0.6)",
  dark20: "rgba(13, 15, 35, 0.2)",
  dark08: "rgba(13, 15, 35, 0.08)",

  // Light
  light: "rgba(255, 255, 255, 1)",
  light80: "rgba(255, 255, 255, 0.8)",
  light60: "rgba(255, 255, 255, 0.6)",
  light20: "rgba(255, 255, 255, 0.2)",
  light08: "rgba(255, 255, 255, 0.08)",

  // Grey
  grey: "rgba(160, 161, 180, 1)",
  grey80: "rgba(160, 161, 180, 0.8)",
  grey60: "rgba(160, 161, 180, 0.6)",
  grey20: "rgba(160, 161, 180, 0.2)",
  grey08: "rgba(160, 161, 180, 0.08)",

  // Light Grey
  lightGrey: "rgba(247, 247, 247, 1)",
  lightGrey80: "rgba(247, 247, 247, 0.8)",
  lightGrey60: "rgba(247, 247, 247, 0.6)",
  lightGrey20: "rgba(247, 247, 247, 0.2)",
  lightGrey08: "rgba(247, 247, 247, 0.08)",

  // Support 1
  support1: 'rgba(110, 162, 255, 1)',
  support1_08: 'rgba(110, 162, 255, 0.08)',

  // Support 2
  support2: 'rgba(249, 161, 218, 1)',
  support2_08: 'rgba(249, 161, 218, 0.08)',

  // Support 3
  support3: 'rgba(0, 210, 224, 1)',
  support3_08: 'rgba(0, 210, 224, 0.08)',

  // Support 4
  support4: 'rgba(255, 132, 13, 1)',
  support4_08: 'rgba(255, 132, 13, 0.08)',

  // Support 5
  support5: 'rgba(123, 96, 238, 1)',
  support5_08: 'rgba(123, 96, 238, 0.08)',
  
  // Shadow
  shadow: "rgba(138, 149, 158, 1)",
  shadow08: "rgba(138, 149, 158, 0.08)",
};

export const FONTFAMILY = {
  // regular fonts
  regular: "Poppins-Regular",
  black: "Poppins-Black",
  bold: "Poppins-Bold",
  extraBold: "Poppins-ExtraBold",
  extraLight: "Poppins-ExtraLight",
  light: "Poppins-Light",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  thin: "Poppins-Thin",

  // italic fonts
  italic: "Poppins-Italic",
  blackItalic: "Poppins-BlackItalic",
  boldItalic: "Poppins-BoldItalic",
  extraBoldItalic: "Poppins-ExtraBoldItalic",
  extraLightItalic: "Poppins-ExtraLightItalic",
  lightItalic: "Poppins-LightItalic",
  mediumItalic: "Poppins-MediumItalic",
  regularItalic: "Poppins-RegularItalic",
  semiboldItalic: "Poppins-SemiBoldItalic",
  thinItalic: "Poppins-ThinItalic",
};

export const FONTS = {
  largeTitle: { fontFamily: FONTFAMILY.black, fontSize: SIZES.largeTitle },
  h1: { fontFamily: FONTFAMILY.bold, fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: FONTFAMILY.bold, fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: FONTFAMILY.semibold, fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: FONTFAMILY.semibold, fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: FONTFAMILY.semibold, fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: FONTFAMILY.regular,
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: FONTFAMILY.regular,
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: FONTFAMILY.regular,
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: FONTFAMILY.regular,
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: FONTFAMILY.regular,
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};
