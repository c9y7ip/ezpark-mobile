import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// set 2 color : https://colorhunt.co/palette/212648

function Register({navigation}) {
  return (
    <View style={styles.container}>
    </View>
    );
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"flex-end",
    backgroundColor:'#e8e8e8',
    flex:1
  },

})

export default Register;