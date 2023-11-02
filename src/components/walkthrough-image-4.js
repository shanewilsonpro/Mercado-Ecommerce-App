import { useEffect } from "react";
import { View, Image } from "react-native";
import { useDynamicAnimation, MotiImage } from "moti";
import { images } from "../constants";

import { styles } from "./styles/walkthrough-image-4.styles";

const WalkthroughImage4 = ({ animate }) => {
  // Moti initial position
  const motiImage1 = useDynamicAnimation(() => ({
    top: "30%",
    left: "19%",
  }));

  const motiImage2 = useDynamicAnimation(() => ({
    top: "35%",
    left: "50%",
  }));

  const motiImage3 = useDynamicAnimation(() => ({
    top: "52%",
    left: "38%",
  }));

  useEffect(() => {
    if (animate) {
      motiImage1.animateTo({
        top: "6%",
        left: -20,
      });

      motiImage2.animateTo({
        top: "16%",
        left: "93%",
      });

      motiImage3.animateTo({
        top: "85%",
        left: "90%",
      });
    }
  }, [animate]);

  return (
    <View style={styles.Container}>
      <Image
        source={images.walkthrough_04_01}
        style={[styles.Image, styles.Image01]}
      />

      <MotiImage
        state={motiImage1}
        source={images.walkthrough_04_02}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_04_03}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_04_04}
        style={styles.Image}
      />
    </View>
  );
};

export default WalkthroughImage4;