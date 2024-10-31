import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginStackScreen } from "./Navigation/LoginStack";
import TabNavigator from "./Navigation/TabNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TabNavigator></TabNavigator>
  );
}