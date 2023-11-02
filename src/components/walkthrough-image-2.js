import { useEffect } from "react";
import { View, Image } from "react-native";
import { useDynamicAnimation, MotiImage } from "moti";
import { images } from "../constants";

import { styles } from "./styles/walkthrough-image-2.styles";

const WalkthroughImage2 = ({ animate }) => {
  // Moti initial position
  const motiImage1 = useDynamicAnimation(() => ({
    top: "30%",
    left: "25%",
  }));

  const motiImage2 = useDynamicAnimation(() => ({
    top: "45%",
    left: "15%",
  }));

  const motiImage3 = useDynamicAnimation(() => ({
    top: "58%",
    left: "25%",
  }));

  const motiImage4 = useDynamicAnimation(() => ({
    top: "61%",
    left: "40%",
  }));

  const motiImage5 = useDynamicAnimation(() => ({
    top: "27%",
    left: "50%",
  }));

  useEffect(() => {
    if (animate) {
      motiImage1.animateTo({
        top: "20%",
        left: "15%",
      });

      motiImage2.animateTo({
        top: "38%",
        left: -10,
      });

      motiImage3.animateTo({
        top: "62%",
        left: "5%",
      });

      motiImage4.animateTo({
        top: "75%",
        left: "40%",
      });

      motiImage5.animateTo({
        top: "15%",
        left: "65%",
      });
    }
  }, [animate]);

  return (
    <View style={styles.Container}>
      <Image
        source={images.walkthrough_02_01}
        style={[styles.Image, styles.Image01]}
      />

      <Image
        source={images.walkthrough_02_02}
        style={[styles.Image, styles.Image02]}
      />

      <MotiImage
        state={motiImage1}
        source={images.walkthrough_02_03}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage2}
        source={images.walkthrough_02_04}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage3}
        source={images.walkthrough_02_05}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage4}
        source={images.walkthrough_02_06}
        style={styles.Image}
      />

      <MotiImage
        state={motiImage5}
        source={images.walkthrough_02_07}
        style={styles.Image}
      />
    </View>
  );
};

export default WalkthroughImage2;
