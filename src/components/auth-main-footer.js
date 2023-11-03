import { View, Text } from "react-native";

import TextButton from "./text-button";

import { styles } from "./styles/auth-main-footer.styles";

const AuthMainFooter = ({ animationState, mode, setMode }) => {
  const onPressButton = () => {
    if (animationState.current === "signIn") {
      animationState.transitionTo("signUp");
      setMode("signUp");
    } else {
      animationState.transitionTo("signIn");
      setMode("signIn");
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.BodyText}>
        {mode == "signIn"
          ? "Don't have an account?"
          : "I already have an account."}
      </Text>

      <TextButton
        label={mode == "signIn" ? "Create New Account" : "Sign In"}
        contentContainerStyle={styles.TextButtonContainer}
        labelStyle={styles.TextButtonLabel}
        onPress={onPressButton}
      />
    </View>
  );
};

export default AuthMainFooter;
