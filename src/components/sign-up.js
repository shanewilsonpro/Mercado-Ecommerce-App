import { useState } from "react";
import { View, Text } from "react-native";
import { MotiView } from "moti";
import { Shadow } from "react-native-shadow-2";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { COLORS } from "../theme/theme";

import FormInput from "./form-input";
import CountryDropDown from "./country-drop-down";
import IconButton from "./icon-button";
import TextButton from "./text-button";
import CheckBox from "./check-box";

import { styles } from "./styles/sign-up.styles";

const SignUp = ({
  animationState,
  selectedCountry,
  showCountryModal,
  setShowCountryModal,
}) => {
  // States
  const [isVisible, setIsVisible] = useState(false);

  // Forms
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);

  // Presses
  const onPressCountryDropDown = () => {
    setShowCountryModal(!showCountryModal);
  };

  const onPressEyeIcon = () => {
    setIsVisible(!isVisible);
  };

  const onPressCheckBoxTerms = () => {
    setTermsChecked(!termsChecked);
  };

  const onPressCreateAccount = () => {
    console.log("Create account");
  };

  return (
    <MotiView state={animationState} style={styles.Container}>
      <Shadow>
        <View style={styles.AuthContainer}>
          <Text style={styles.TitleText}>Create new account</Text>

          <KeyboardAwareScrollView
            enableOnAndroid={true}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={-300}
            contentContainerStyle={styles.ScrollViewContainer}
          >
            {/* Name */}
            <FormInput
              containerStyle={styles.FormInputContainer}
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
              prependComponent={
                <Ionicons
                  name="person"
                  size={25}
                  color={COLORS.grey60}
                  style={styles.IconContainer}
                />
              }
            />

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
                  style={styles.IconContainer}
                />
              }
            />

            {/* Phone Number */}
            <FormInput
              containerStyle={styles.FormInputContainer}
              placeholder="Phone Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              prependComponent={
                <FontAwesome
                  name="phone"
                  size={25}
                  color={COLORS.grey60}
                  style={styles.IconContainer}
                />
              }
            />

            {/* Country Dropdown */}
            <CountryDropDown
              containerStyle={styles.CountryDropDownContainer}
              selectedCountry={selectedCountry}
              onPress={onPressCountryDropDown}
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
                  style={styles.IconContainer}
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
                  onPress={onPressEyeIcon}
                />
              }
            />

            {/* Terms and Conditions */}
            <CheckBox
              containerStyle={styles.CheckBoxContainer}
              isSelected={termsChecked}
              onPress={onPressCheckBoxTerms}
            />
          </KeyboardAwareScrollView>

          {/* Create Account Button */}
          <TextButton
            label="Create Account"
            contentContainerStyle={styles.CreateAccountButtonContainer}
            labelStyle={styles.CreateAccountButtonLabel}
            onPress={onPressCreateAccount}
          />
        </View>
      </Shadow>
    </MotiView>
  );
};

export default SignUp;
