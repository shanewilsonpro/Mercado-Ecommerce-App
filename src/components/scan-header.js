import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import IconButton from "./icon-button";

import { constants } from "../constants";

import { styles } from "./styles/scan-header.styles";

const ScanHeader = ({ navigation, selectedOption }) => {
  // Presses
  const onPressClose = () => {
    navigation.goBack();
  };

  const onPressFlash = () => {
    console.log("Flash");
  };

  const onPressHelp = () => {
    console.log("Help");
  };

  return (
    <View style={styles.Container}>
      {/* Close Button */}
      <IconButton
        icon={<Ionicons name="close" size={30} />}
        onPress={onPressClose}
      />

      {/* Title */}
      <Text style={styles.TitleText}>
        {selectedOption == constants.scan_product_option.camera
          ? "Scan Camera"
          : "Scan QR Code"}
      </Text>

      {/* Flash Button */}
      <IconButton
        icon={<Ionicons name="flash" size={25} />}
        containerStyle={{ marginRight: 10 }}
        onPress={onPressFlash}
      />

      {/* Help Button */}
      <IconButton
        icon={<FontAwesome name="question-circle" size={25} />}
        onPress={onPressHelp}
      />
    </View>
  );
};

export default ScanHeader;
