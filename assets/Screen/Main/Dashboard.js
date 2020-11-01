import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Dashboard({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Dshboard</Text>
    </View>
    );
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"flex-end",
    backgroundColor:'#e8e8e8',
    flex:1
  },
  logo:{
      width:50,
      height:50,
      left:"150%",
  },
  button:{
    flex:0.5,
    flexDirection:"row"
  }
})

export default Dashboard;