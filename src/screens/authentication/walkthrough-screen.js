import { useRef } from "react";
import { View, Animated, Text } from "react-native";

import { SIZES } from "../../theme/theme";
import { constants } from "../../constants";
import WalkthroughImage1 from "../../components/walkthrough-image-1";
import WalkthroughFooter from "../../components/walkthrough-footer";

import { styles } from "./styles/walkthrough-screen.styles";

const WalkthroughScreen = () => {
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
      <WalkthroughFooter scrollX={scrollX} />
    </View>
  );
};

export default WalkthroughScreen;
