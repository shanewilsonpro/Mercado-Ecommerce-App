import { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { styles } from "./styles/country-list-modal.styles";

const CountryListModal = ({
  showCountryModal,
  setShowCountryModal,
  setSelectedCountry,
}) => {
  // Country
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch countires
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let countryData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            // flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
            flag: `https://flagsapi.com/${item.alpha2Code}/shiny/32.png`,
          };
        });

        setCountries(countryData);
      });
  }, []);

  const onPressCountry = (item) => {
    console.log(item);
    setSelectedCountry(item);
    setShowCountryModal(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={showCountryModal}>
      <TouchableWithoutFeedback onPress={() => setShowCountryModal(false)}>
        <View style={styles.Container}>
          <View style={styles.ListContainer}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.code}
              contentContainerStyle={styles.FlatListContainer}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.TouchableContainer}
                    onPress={() => onPressCountry(item)}
                  >
                    <Image
                      source={{ uri: item.flag }}
                      resizeMode="contain"
                      style={styles.FlagImage}
                    />
                    <Text style={styles.CountryText}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CountryListModal;
