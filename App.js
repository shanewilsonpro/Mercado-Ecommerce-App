import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./src/screens/authentication/welcome-screen";
import WalkthroughScreen from "./src/screens/authentication/walkthrough-screen";
import AuthMainScreen from "./src/screens/authentication/auth-main-screen";
import HomeScreen from "./src/screens/app/home-screen";
import ScanProductScreen from "./src/screens/app/scan-product-screen";

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
        <Stack.Screen name="AuthMain" component={AuthMainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
