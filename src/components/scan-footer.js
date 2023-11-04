import { View } from "react-native";

import TextButton from "./text-button";

import { constants } from "../constants";

import { styles } from "./styles/scan-footer.styles";
import { COLORS, SIZES, FONTS } from "../theme/theme";

const ScanFooter = ({ selectedOption, setSelectedOption }) => {
  // Presses
  const onPressScanQRCode = () => {
    setSelectedOption(constants.scan_product_option.qr);
  };

  const onPressScanCamera = () => {
    setSelectedOption(constants.scan_product_option.camera);
  };

  return (
    <View style={styles.Container}>
      {/* Scan QR Code Button */}
      <TextButton
        label="Scan QR Code"
        contentContainerStyle={{
          flex: 1,
          height: 55,
          borderRadius: SIZES.radius10,
          color: COLORS.lightGrey,
          backgroundColor:
            selectedOption == constants.scan_product_option.qr
              ? COLORS.primary
              : COLORS.lightGrey,
        }}
        labelStyle={{
          ...FONTS.h3,
          color:
            selectedOption == constants.scan_product_option.qr
              ? COLORS.secondary
              : COLORS.primary,
        }}
        onPress={onPressScanQRCode}
      />

      {/* Scan Camera Button */}
      <TextButton
        label="Scan Camera"
        contentContainerStyle={{
          flex: 1,
          height: 55,
          marginLeft: SIZES.space10,
          borderRadius: SIZES.radius10,
          color: COLORS.lightGrey,
          backgroundColor:
            selectedOption == constants.scan_product_option.camera
              ? COLORS.primary
              : COLORS.lightGrey,
        }}
        labelStyle={{
          ...FONTS.h3,
          color:
            selectedOption == constants.scan_product_option.camera
              ? COLORS.secondary
              : COLORS.primary,
        }}
        onPress={onPressScanCamera}
      />
    </View>
  );
};

export default ScanFooter;
