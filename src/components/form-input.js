import { View, TextInput } from "react-native";

import { COLORS } from "../theme/theme";

import { styles } from "./styles/form-input.styles";

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  value = "",
  prependComponent,
  appendComponent,
  onChangeText,
  onPress,
  editable,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  maxLength,
  placeholderTextColor = COLORS.grey60,
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={[
          styles.InputContainer,
          {
            ...inputContainerStyle,
          },
        ]}
      >
        {prependComponent}

        <TextInput
          style={[
            styles.Input,
            {
              ...inputStyle,
            },
          ]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={(text) => onChangeText(text)}
          onPressIn={onPress}
          editable={editable}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
