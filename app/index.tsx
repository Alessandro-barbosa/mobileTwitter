import * as React from 'react';
import {createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './login';
const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
  );
};

export default App;