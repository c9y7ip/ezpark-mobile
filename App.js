import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ViewBase } from 'react-native';
import HomeScreen from './assets/Screen/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './assets/Screen/Dashboard';
import PersonInfo from './assets/Screen/PersonInfo';
import Register from './assets/Screen/Register';
import LoginPage from './assets/Screen/LoginPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name="loginpage"  component={LoginPage}/>
        <Stack.Screen name="register" component={Register}/>
        <Stack.Screen name="dashboard" component={Dashboard}/>
        <Stack.Screen name="personInfo" component={PersonInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}