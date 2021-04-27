import React, {useEffect, useState}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

import Login from "./screens/Login"
import Main from './screens/Main';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;