import { useEffect } from "react";
import { View } from "react-native";
import { useDynamicAnimation, MotiImage } from "moti";
import { images } from "../constants";

import { styles } from "./styles/walkthrough-image-3.styles";

const WalkthroughImage3 = ({ animate }) => {
  // Moti initial position
  const motiImage1 = useDynamicAnimation(() => ({
    top: "40%",
    left: "38%",
  }));

  const motiImage2 = useDynamicAnimation(() => ({
    top: "48%",
    left: "22%",
  }));

  const motiImage3 = useDynamicAnimation(() => ({
    top: "52%",
    left: "45%",
  }));

  const motiImage4 = useDynamicAnimation(() => ({
    top: "35%",
    left: "25%",
  }));

  useEffect(() => {
    if (animate) {
      motiImage1.animateTo({
        top: "30%",
        left: "55%",
      });

      motiImage2.animateTo({
        top: "50%",
        left: "15%",
      });

      motiImage3.animateTo({
        top: "55%",
        left: "50%",
      });

      motiImage4.animateTo({
        top: "25%",
        left: "20%",
      });
    }
  }, [animate]);

  return (
    <View style={styles.Container}>
      <MotiImage
        state={motiImage1}
        source={images.walkthrough_03_01}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_03_02}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_01_02}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage4}
        source={images.walkthrough_01_01}
        style={styles.Image}
      />
    </View>
  );
};

export default WalkthroughImage3;