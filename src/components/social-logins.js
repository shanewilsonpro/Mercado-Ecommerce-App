import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import IconButton from "./icon-button";

import { COLORS } from "../theme/theme";
import { styles } from "./styles/social-logins.styles";

const SocialLogins = () => {
  // Presses
  const onPressTwitter = () => {
    console.log("Twitter");
  };

  const onPressGoogle = () => {
    console.log("Google");
  };

  const onPressLinkedin = () => {
    console.log("Linkedin");
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.OrLoginText}>OR login with</Text>

      <View style={styles.ButtonsContainer}>
        <IconButton
          icon={<FontAwesome name="twitter" size={25} color={COLORS.dark} />}
          containerStyle={styles.IconButtonContainer}
          onPress={onPressTwitter}
        />
        <IconButton
          icon={<FontAwesome name="google" size={25} color={COLORS.dark} />}
          containerStyle={styles.IconButtonContainer}
          onPress={onPressGoogle}
        />
        <IconButton
          icon={<FontAwesome name="linkedin" size={25} color={COLORS.dark} />}
          containerStyle={styles.IconButtonContainer}
          onPress={onPressLinkedin}
        />
      </View>
    </View>
  );
};

export default SocialLogins;
