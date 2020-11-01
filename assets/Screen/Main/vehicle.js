import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function Vehicle({navigation}) {
  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>
      <TouchableOpacity onPress={()=>navigation.navigate('VehicleUpdate')}>
        <Text>Edit</Text>
      </TouchableOpacity>          
      <Text>license</Text>
      <Text>Created By</Text>
      <Text>Province</Text>
      <Text>Description</Text>
      <Text>Session</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  }
})

export default Vehicle;