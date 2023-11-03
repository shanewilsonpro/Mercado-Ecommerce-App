import { View, TouchableOpacity, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import { COLORS } from "../theme/theme";

import { styles } from "./styles/check-box.styles";

const CheckBox = ({ containerStyle, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.TouchableContainer, { ...containerStyle }]}
      onPress={onPress}
    >
      <View
        style={[
          styles.CheckBoxIconContainer,
          {
            borderColor: isSelected ? COLORS.primary : COLORS.grey,
            backgroundColor: isSelected ? COLORS.primary : null,
          },
        ]}
      >
        {isSelected && <Entypo name="check" size={20} color={COLORS.light} />}
      </View>

      <Text style={styles.BodyText}>
        By registering, you agree to our Terms and that you have read our Data
        Use Policy.
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
