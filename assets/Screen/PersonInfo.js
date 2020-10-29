import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// set 2 color : https://colorhunt.co/palette/212648

function PersonInfo({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{flex:0.08,flexDirection:"row"}}>
            <TouchableOpacity style={[styles.button,{backgroundColor:"#bbbfca"}]} onPress={()=>navigation.navigate('dashboard')}>
                <Image style={styles.logo} source={require("../image/QRscan.png")} />
            </TouchableOpacity>
            <View style={{backgroundColor:"#495464",flex:0.01,flexDirection:"row"}} />
            <TouchableOpacity style={[styles.button,{backgroundColor:"#bbbfca"}]} onPress={()=>navigation.navigate('personInfo')}>
                <Image style={styles.logo} source={require("../image/personInfo.png")} />
            </TouchableOpacity>
        </View>
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

export default PersonInfo;