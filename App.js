import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './assets/Screen/Auth/HomeScreen';
import PersonInfo from './assets/Screen/Main/PersonInfo';
import Register from './assets/Screen/Auth/Register';
import LoginPage from './assets/Screen/Auth/LoginPage';
import Dashboard from './assets/Screen/Main/Dashboard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardUpdate from './assets/Screen/Main/card_update';
import VehicleUpdate from './assets/Screen/Main/vehicle_update';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack(){
  return (
      <Stack.Navigator>
        <Stack.Screen name="home" options={{headerShown:false}} component={HomeScreen}/>
        <Stack.Screen name="loginpage"   options={{headerShown:false}} component={LoginPage}/>
        <Stack.Screen name="register"  options={{headerShown:false}} component={Register}/>
      </Stack.Navigator>
  );
}

function DashTab(){
  return (
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'dashboard') {
                    iconName = focused
                      ? 'md-qr-scanner'
                      : 'md-qr-scanner';
                  } else if (route.name === 'personinfo') {
                    iconName = focused ? 'md-person' : 'md-person';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }}
            >
        <Tab.Screen name="dashboard" component={Dashboard}/>
        <Tab.Screen name="personinfo" component={PersonInfo}/>
      </Tab.Navigator>
  );
}

const root = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <root.Navigator>
        <root.Screen name="home"   options={{headerShown:false}} component={HomeStack}/>
        <root.Screen name="mainpage"  options={{headerShown:false}} component={DashTab} />
        <root.Screen name="profile"  options={{headerShown:false}} component={PersonInfo} />
        <root.Screen name="CardUpdate" options={{headerShown:false}} component={CardUpdate} />
        <root.Screen name="VehicleUpdate" options={{headerShown:false}} component={VehicleUpdate} />
      </root.Navigator>
    </NavigationContainer>  
  )
}