// set 1 color ： https://colorhunt.co/palette/92306

import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
     <View style={styles.logo} >
      <Image source={require("../../image/logo.png")} />
    </View> 

    <TouchableOpacity style={[styles.homeButton,{backgroundColor:"#fdfdfd"}]} onPress={()=>navigation.navigate('loginpage')}>
      <Text style={styles.text}> Sign In</Text>
    </TouchableOpacity>

    <TouchableOpacity style={[styles.homeButton,{backgroundColor:"#ffcef3"}]} onPress={()=>navigation.navigate('register')}>
      <Text style={styles.text}>Register</Text>
    </TouchableOpacity>

    </View>
    );
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"flex-end",
    backgroundColor:'#a1eafb',
    flex:1
  },
  homeButton:{
    height:"8%",
  },
  text:{
    textAlign:"center",
    marginTop:"4%",
    fontSize:20
  },
  logo:{
      alignItems:"center",
      top:"-30%"
  }
})

export default HomeScreen;