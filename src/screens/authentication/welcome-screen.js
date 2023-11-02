import { View, Text, Image } from "react-native";

import { images } from "../../constants";
import TextButton from "../../components/text-button";

import { styles } from "./styles/welcome-screen.styles";

const WelcomeScreen = ({ navigation }) => {
  const onPressGetStarted = () => {
    navigation.navigate("WalkThrough");
  };

  return (
    <View style={styles.ScreenContainer}>
      {/* Logo & Title */}
      <View style={styles.LogoAndTitleContainer}>
        <Image source={images.logo} style={styles.LogoImage} />

        <Text style={styles.TitleText}>Welcome to</Text>
        <Text style={styles.TitleText}>Mercado</Text>
      </View>

      {/* Footer Buttons */}
      <View style={styles.FooterButtonsContainer}>
        <TextButton
          contentContainerStyle={styles.GetStartedButtonContainer}
          label="Get Started"
          onPress={onPressGetStarted}
        />

        <TextButton
          contentContainerStyle={styles.AlreadyAccountButtonContainer}
          label="Already have an account"
          labelStyle={styles.AlreadyAccountText}
          //onPress
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
