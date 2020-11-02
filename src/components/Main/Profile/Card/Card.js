import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Card({route,navigation}) {

  return (
    <View style={styles.container}>    

      <View style={styles.header} ></View>

      <TouchableOpacity onPress={()=>navigation.navigate('CardUpdate')}>
        <Text>Edit</Text>
      </TouchableOpacity>     

      <Text>Card Holder : </Text>
      <Text>Card Nunmber</Text>
      <Text>CVV</Text>
      <Text>Expierd Date</Text>

    </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  }
})

export default Card;