import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>hi</Text>
        <Icon name="rocket" size={20} color="#bf1313" />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
