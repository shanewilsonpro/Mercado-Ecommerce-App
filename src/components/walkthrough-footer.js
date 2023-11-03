import { View, Animated } from "react-native";

import TextButton from "./text-button";
import { COLORS, SIZES } from "../theme/theme";
import { constants } from "../constants";

import { styles } from "./styles/walkthrough-footer.styles";

const WalkthroughFooter = ({ scrollX, navigation }) => {
  const onPressLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "AuthMain" }],
    });
  };

  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.DotsContainer}>
        {constants.walkthrough.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
            extrapolate: "clamp",
          });

          // Dots Horizontal
          return (
            <Animated.View
              key={`dot-${index}`}
              style={[
                styles.Dots,
                {
                  backgroundColor: dotColor,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.Container}>
      {/* Dots */}
      <Dots />

      {/* Buttons */}
      <View style={styles.ButtonsContainer}>
        {/* Join Now Button */}
        <TextButton
          label="Join Now"
          contentContainerStyle={styles.JoinNowButtonContainer}
          labelStyle={styles.JoinNowButtonLabel}
        />

        {/* Log In Button */}
        <TextButton
          label="Log In"
          contentContainerStyle={styles.LogInButtonContainer}
          labelStyle={styles.LoginButtonLabel}
          onPress={onPressLogin}
        />
      </View>
    </View>
  );
};

export default WalkthroughFooter;
