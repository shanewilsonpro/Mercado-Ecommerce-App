import { useRef, useState } from "react";
import { View, Animated, Text } from "react-native";

import { SIZES } from "../../theme/theme";
import { constants } from "../../constants";
import WalkthroughFooter from "../../components/walkthrough-footer";
import WalkthroughImage1 from "../../components/walkthrough-image-1";
import WalkthroughImage2 from "../../components/walkthrough-image-2";
import WalkthroughImage3 from "../../components/walkthrough-image-3";
import WalkthroughImage4 from "../../components/walkthrough-image-4";

import { styles } from "./styles/walkthrough-screen.styles";

const WalkthroughScreen = ({ navigation }) => {
  // Walkthrough Image 2
  const [walkthroughImage2Animate, setWalkthroughImage2Animate] =
    useState(false);

  // Walkthrough Image 3
  const [walkthroughImage3Animate, setWalkthroughImage3Animate] =
    useState(false);

  // Walkthrough Image 4
  const [walkthroughImage4Animate, setWalkthroughImage4Animate] =
    useState(false);

  const onViewChangedRef = useRef(({ viewableItems, changed }) => {
    if (viewableItems[0].index == 1) {
      setWalkthroughImage2Animate(true);
    } else if (viewableItems[0].index == 2) {
      setWalkthroughImage3Animate(true);
    } else if (viewableItems[0].index == 3) {
      setWalkthroughImage4Animate(true);
    }
  });

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.ScreenContainer}>
      {/* Walkthrough Slide List */}
      <Animated.FlatList
        data={constants.walkthrough}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={SIZES.width}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewChangedRef.current}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.WalkthroughItemContainer}>
              {/* Walkthrough Images */}
              <View style={styles.WalkthroughImagesContainer}>
                {index == 0 && <WalkthroughImage1 />}
                {index == 1 && (
                  <WalkthroughImage2 animate={walkthroughImage2Animate} />
                )}
                {index == 2 && (
                  <WalkthroughImage3 animate={walkthroughImage3Animate} />
                )}
                {index == 3 && (
                  <WalkthroughImage4 animate={walkthroughImage4Animate} />
                )}
              </View>

              {/* Title & Description */}
              <View style={styles.TitleAndDescContainer}>
                <Text style={styles.TitleText}>{item.title}</Text>
                <Text style={styles.DescriptionText}>{item.sub_title}</Text>
              </View>
            </View>
          );
        }}
      />

      {/* Footer */}
      <WalkthroughFooter scrollX={scrollX} navigation={navigation} />
    </View>
  );
};

export default WalkthroughScreen;
