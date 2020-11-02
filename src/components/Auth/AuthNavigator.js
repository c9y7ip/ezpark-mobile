
import React from 'react'

import HomeScreen from './HomeScreen'
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="loginpage" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="register" options={{ headerShown: false }} component={RegisterScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack