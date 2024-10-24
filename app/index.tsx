import * as React from 'react';
import {createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './login';
const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{title: 'Login'}}
        />
      </Stack.Navigator>
  );
};

export default App;