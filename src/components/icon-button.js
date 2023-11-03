import { TouchableOpacity } from "react-native";

import { styles } from "./styles/icon-button.styles";

const IconButton = ({ containerStyle, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.TouchableContainer, {
        ...containerStyle,
      }]}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default IconButton;
