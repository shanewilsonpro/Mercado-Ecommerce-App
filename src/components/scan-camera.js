import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Svg, Defs, Rect, Mask } from "react-native-svg";
import { MotiView } from "moti";
import { Shadow } from "react-native-shadow-2";
import { Camera, useCodeScanner } from "react-native-vision-camera";

import IconButton from "./icon-button";

import { constants, images } from "../constants";

import { styles } from "./styles/scan-camera.styles";
import { COLORS } from "../theme/theme";

const ScanCamera = ({
  device,
  selectedOption,
  loaderAnimationState,
  productAnimationState,
}) => {
  // Barcode
  const [isScanned, setIsScanned] = useState(false);

  const codeScanner = useCodeScanner({
    codeTypes: ["qr", "ean-13"],
    onCodeScanned: (codes) => {
      if (selectedOption == constants.scan_product_option.qr) {
        toggleActiveState(codes);
      }
    },
  });

  const toggleActiveState = async (codes) => {
    if (codes.length > 0 && isScanned === false) {
      setIsScanned(true);

      codes.forEach(async (scannedBarcode) => {
        console.log("scanned: " + scannedBarcode);
        if (scannedBarcode.rawValue !== "") {
          productAnimationState.transitionTo("show");

          setTimeout(() => {
            productAnimationState.transitionTo("hide");
            setIsScanned(false);
          }, 4000);
        }
      });
    }
  };

  // Presses
  const onPressScan = () => {
    loaderAnimationState.transitionTo("start");

    setTimeout(() => {
      loaderAnimationState.transitionTo("stop");
      productAnimationState.transitionTo("show");

      setTimeout(() => {
        productAnimationState.transitionTo("hide");
      }, 4000);
    }, 2000);
  };

  function CameraFrame() {
    return (
      <Svg height="100%" width="100%">
        <Defs>
          <Mask id="mask" x="0" y="0" height="100%" width="100%">
            <Rect height="100%" width="100%" fill="#fff" />
            <Rect x="18%" y="30%" width="250" height="250" fill="black" />
          </Mask>
        </Defs>
        <Rect
          height="100%"
          width="100%"
          fill="rgba(0, 0, 0, 0.8)"
          mask="url(#mask)"
        />

        {/* Frame Border */}
        <Rect
          x="18%"
          y="30%"
          width="250"
          height="250"
          strokeWidth="5"
          stroke="#fff"
          fill="transparent"
        />
      </Svg>
    );
  }

  if (device == null) {
    return <View style={styles.Container} />;
  } else {
    return (
      <View style={styles.Container}>
        <Camera
          style={styles.Camera}
          device={device}
          isActive={true}
          enableZoomGesture
          codeScanner={codeScanner}
        />

        {/* Loading / Searching View */}
        <MotiView
          state={loaderAnimationState}
          style={styles.MotiSearchingTextContainer}
        >
          <Text style={styles.SearchingText}>Searching</Text>
        </MotiView>

        {/* Scan Button */}
        {selectedOption == constants.scan_product_option.camera && (
          <View style={styles.ButtonContainer}>
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name="line-scan"
                  size={45}
                  color={COLORS.primary}
                />
              }
              containerStyle={styles.ScanIconButton}
              onPress={onPressScan}
            />
          </View>
        )}

        {/* QR Code */}
        {selectedOption == constants.scan_product_option.qr && (
          <View style={styles.CameraFrameContainer}>
            {/* Camera Frame */}
            <CameraFrame />

            {/* Label 1 */}
            <View style={styles.ScanTextContainer}>
              <Text style={styles.ScanText}>Scan...</Text>
            </View>

            {/* Label 2 */}
            <View style={styles.BodyTextContainer}>
              <Text style={styles.BodyText}>
                Align the code to be in the middle of the box
              </Text>
            </View>
          </View>
        )}

        {/* Product */}
        <MotiView
          state={productAnimationState}
          style={styles.ProductCardContainer}
        >
          <Shadow>
            <TouchableOpacity style={styles.TouchableProductCard}>
              {/* Product Image */}
              <Image source={images.luggage_01} style={styles.ProductImage} />

              {/* Product Name & SKU */}
              <View style={styles.ProductNameSKUTextsContainer}>
                <Text style={styles.ProductNameText}>Vali Sakos</Text>
                <Text style={styles.ProductSKUText}>SKU: 123456789</Text>
              </View>

              {/* Price */}
              <Text style={styles.PriceText}>$67.00</Text>
            </TouchableOpacity>
          </Shadow>
        </MotiView>
      </View>
    );
  }
};

export default ScanCamera;
