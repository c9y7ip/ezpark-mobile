import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './src/components/Auth/AuthNavigator'
import MainTabNavigator from './src/components/Main/MainTabNavigator'

const root = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <root.Navigator>
        <root.Screen name="auth" options={{ headerShown: false }} component={AuthNavigator} />
        <root.Screen name="mainpage" options={{ headerShown: false }} component={MainTabNavigator} />
      </root.Navigator>
    </NavigationContainer>  
  )
}