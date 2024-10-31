import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/login";
import HomeScreen from "../Screens/home";

const LoginStack = createNativeStackNavigator();

export function LoginStackScreen() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen name="Login" component={LoginScreen}/>
      <LoginStack.Screen name="Home" component={HomeScreen}/>
    </LoginStack.Navigator>
  );
}