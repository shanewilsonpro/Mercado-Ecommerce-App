import { View, TouchableOpacity, Text, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../theme/theme";

import { styles } from "./styles/country-drop-down.styles";

const CountryDropDown = ({ containerStyle, selectedCountry, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.TouchableContainer,
        {
          ...containerStyle,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.DropDownBar}>
        {!selectedCountry && <Text style={styles.CountryText}>Country</Text>}

        {selectedCountry && (
          <>
            <Image
              source={{ uri: selectedCountry?.flag }}
              resizeMode="cover"
              style={styles.FlagImage}
            />
            <Text style={styles.CountryNameText}>{selectedCountry?.name}</Text>
          </>
        )}
      </View>

      <MaterialIcons
        name="keyboard-arrow-down"
        size={30}
        color={COLORS.grey60}
      />
    </TouchableOpacity>
  );
};

export default CountryDropDown;
