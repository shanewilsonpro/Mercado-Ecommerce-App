import { useState, useCallback, useEffect } from "react";
import { View, Linking } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

import { constants } from "../../constants";

import { styles } from "./styles/scan-product-screen.styles";
import ScanHeader from "../../components/scan-header";
import ScanFooter from "../../components/scan-footer";
import ScanCamera from "../../components/scan-camera";
import { useAnimationState } from "moti";

const ScanProductScreen = ({ navigation }) => {
  // States
  const [selectedOption, setSelectedOption] = useState(
    constants.scan_product_option.camera
  );

  // Camera
  const device = useCameraDevice("back");

  // Moti
  const loaderAnimationState = useAnimationState({
    start: {
      opacity: 1,
    },
    stop: {
      opacity: 0,
    },
  });

  const productAnimationState = useAnimationState({
    hide: {
      opacity: 0,
      translateY: -10,
    },
    show: {
      opacity: 1,
      translateY: 10,
    },
  });

  useEffect(() => {
    // Animation
    productAnimationState.transitionTo("hide");
    loaderAnimationState.transitionTo("stop");

    // Permission
    requestCameraPermission();
  }, []);

  // Handler
  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === "denied") await Linking.openSettings();
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      {/* Header */}
      <ScanHeader selectedOption={selectedOption} navigation={navigation} />

      {/* Scan Camera */}
      <ScanCamera
        device={device}
        selectedOption={selectedOption}
        loaderAnimationState={loaderAnimationState}
        productAnimationState={productAnimationState}
      />

      {/* Footer */}
      <ScanFooter
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </View>
  );
};

export default ScanProductScreen;
