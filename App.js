import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./src/screens/authentication/welcome-screen";
import WalkthroughScreen from "./src/screens/authentication/walkthrough-screen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Welcome"}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Walkthrough" component={WalkthroughScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
