import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { useAnimationState } from "moti";

import SocialLogins from "../../components/social-logins";
import AuthMainFooter from "../../components/auth-main-footer";
import CountryListModal from "../../components/country-list-modal";
import SignUp from "../../components/sign-up";
import SignIn from "../../components/sign-in";

import { images } from "../../constants";

import { SIZES } from "../../theme/theme";
import { styles } from "./styles/auth-main-screen.styles";

const AuthMainScreen = ({ navigation }) => {
  // States
  const [mode, setMode] = useState("signIn");

  // Country
  const [showCountryModal, setShowCountryModal] = useState(false);

  // Forms
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Animation States
  const animationState = useAnimationState({
    signIn: {
      height: SIZES.height * 0.55,
    },
    signUp: {
      height: SIZES.height * 0.7,
    },
  });

  useEffect(() => {
    animationState.transitionTo("signIn");
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      {/* Logo */}
      <Image source={images.logo} style={styles.LogoImage} />

      {/* Auth Container */}
      <View style={{ zIndex: 1 }}>
        {mode == "signIn" ? (
          <SignIn animationState={animationState} navigation={navigation} />
        ) : (
          <SignUp
            animationState={animationState}
            selectedCountry={selectedCountry}
            showCountryModal={showCountryModal}
            setShowCountryModal={setShowCountryModal}
          />
        )}
      </View>

      {/* Footer */}
      <AuthMainFooter
        animationState={animationState}
        mode={mode}
        setMode={setMode}
      />

      {/* Social Logins */}
      {mode == "signIn" && <SocialLogins />}

      {/* Country Modal */}
      <CountryListModal
        showCountryModal={showCountryModal}
        setShowCountryModal={setShowCountryModal}
        setSelectedCountry={setSelectedCountry}
      />
    </View>
  );
};

export default AuthMainScreen;
