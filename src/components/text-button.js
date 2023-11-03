import { TouchableOpacity, Text } from "react-native";

import { styles } from "./styles/text-button.styles";

const TextButton = ({
  contentContainerStyle,
  disabled,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.TouchableContainer,
        {
          ...contentContainerStyle,
        },
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={[styles.LabelText, { ...labelStyle }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
