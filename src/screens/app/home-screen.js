import { View } from "react-native";

import { styles } from "./styles/home-screen.styles";
import TextButton from "../../components/text-button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.ScreenContainer}>
      <TextButton
        label="Scan"
        onPress={() => {
          navigation.navigate("Scan");
        }}
      />
    </View>
  );
};

export default HomeScreen;
