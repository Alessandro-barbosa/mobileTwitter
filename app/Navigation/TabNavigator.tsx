import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginStackScreen } from './LoginStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>        
        <Tab.Screen name="Login" component={LoginStackScreen}/>       
    </Tab.Navigator>
  );
}

export default TabNavigator;