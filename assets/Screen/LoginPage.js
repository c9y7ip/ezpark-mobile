import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

// set 2 color : https://colorhunt.co/palette/212648

const connect = ()=>{
  fetch('http://192.168.0.13:3000/show',{
    method:'post',

    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },

    body: JSON.stringify({
      firstpara :"hello 1",
      secondPara: "hello 2"
    })
  })
  .catch(function(error){
    console.error(error.message);
  })
};

function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Account"/>
        <TextInput style={styles.input} placeholder="Password"/>
        <Button title='Login' onPress={()=>navigation.navigate('dashboard')}/>
        {/* <Button title='Login' onPress={connect}/> */}
    </View>
    );
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#e8e8e8',
    flex:1
  },
  input:{
      borderWidth:2,
      marginBottom:20,
      paddingLeft:8,
      borderColor:'#777',
      width:200,
  }

})

export default LoginPage;