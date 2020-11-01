import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Card from './card';
import Vehicle from './vehicle';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function profile(){
  return(
    <View>
      <View style={styles.header}></View>
      <Text>Name</Text>
      <Text>phone</Text>
      <Text>Email</Text>
      <Text>vehicle</Text>
      <Text>Parking info</Text>
    </View>
  )
}

function draw(){
  return(
    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Profile" component={profile} />
    <Drawer.Screen name="Card" component={Card} />
    <Drawer.Screen name="Vehicle" component={Vehicle} />
    </Drawer.Navigator>
  )
}

function PersonInfo({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="test" options={{headerShown:false}} component={draw}/>
    </Stack.Navigator>

    );
}


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  }
})

export default PersonInfo;