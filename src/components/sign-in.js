import { useState } from "react";
import { View, Text } from "react-native";
import { MotiView } from "moti";
import { Shadow } from "react-native-shadow-2";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";

import FormInput from "./form-input";
import IconButton from "./icon-button";
import TextButton from "./text-button";

import { COLORS } from "../theme/theme";
import { styles } from "./styles/sign-in.styles";

const SignIn = ({
  animationState,
  navigation
}) => {
  // States
  const [isVisible, setIsVisible] = useState(false);

  // Forms
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressForgotPassword = () => {
    console.log("Forgot Password");
  };

  const onPressLogin = () => {
    navigation.navigate("Home")
  };

  return (
    <MotiView state={animationState} style={styles.Container}>
      <Shadow>
        <View style={styles.AuthContainer}>
          <Text style={styles.TitleText}>Sign in to continue</Text>

          <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={-300}
            contentContainerStyle={styles.ScrollViewContainer}
          >
            {/* Email */}
            <FormInput
              containerStyle={styles.FormInputContainer}
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              prependComponent={
                <Foundation
                  name="mail"
                  size={25}
                  color={COLORS.grey60}
                  style={styles.FormIcon}
                />
              }
            />

            {/* Password */}
            <FormInput
              containerStyle={styles.FormInputContainer}
              placeholder="Password"
              secureTextEntry={!isVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
              prependComponent={
                <Foundation
                  name="lock"
                  size={25}
                  color={COLORS.grey60}
                  style={styles.FormIcon}
                />
              }
              appendComponent={
                <IconButton
                  icon={
                    isVisible ? (
                      <Ionicons
                        name="eye-off-outline"
                        size={30}
                        color={COLORS.grey60}
                      />
                    ) : (
                      <Ionicons
                        name="eye-outline"
                        size={30}
                        color={COLORS.grey60}
                      />
                    )
                  }
                  onPress={() => setIsVisible(!isVisible)}
                />
              }
            />

            {/* Forgot Password Button */}
            <View style={{ alignItems: "flex-end" }}>
              <TextButton
                label="Forgot Password"
                contentContainerStyle={styles.ForgotPasswordButtonContainer}
                labelStyle={styles.ForgotPasswordButtonLabel}
                onPress={onPressForgotPassword}
              />
            </View>
          </KeyboardAwareScrollView>

          {/* Log In Button */}
          <TextButton
            label="Log In"
            contentContainerStyle={styles.LoginButtonContainer}
            labelStyle={styles.LoginButtonLabel}
            onPress={onPressLogin}
          />
        </View>
      </Shadow>
    </MotiView>
  );
};

export default SignIn;
