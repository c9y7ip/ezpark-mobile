// set 2 color : https://colorhunt.co/palette/212648

import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage, Image, ViewBase, } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import authApi from '../../api/authApi'


const Stack = createStackNavigator();



const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");


  const connect = () => {
    authApi.login(email, password)
      .then((response) => {
        console.log(response.token)
        return AsyncStorage.setItem("token", response.token)
      }).then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'mainpage' }],
        })
      }) 
      .catch(err => console.warn(err))

    // fetch('http://192.168.0.13:5000/auth/login', {
    //   method: 'post',

    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },

    //   body: JSON.stringify({
    //     email: email,
    //     password: password
    //   })
    //   })
    //   .then((res)=>{
    //     return res.text()
    //   })
    //   .then(async (tok)=>{
    //     try{
    //       await AsyncStorage.setItem("token",tok)
    //       navigation.navigate('mainpage')
    //     }catch(e){
    //       console.warn(e)
    //     }
    //   })
    //   .catch(function (error) {
    //     console.error(error.message);
    //   })
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      if (value !== null) {
        setToken(value)
      }
    } catch (e) {
      console.warn(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>

      
      <Text style={styles.text}>Log In</Text>
      <Text>{token}</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)} />
      <TextInput secureTextEntry={true} style={styles.input} placeholder="Password" onChangeText={text => setPassword(text)} />
      {/* <Button title='Login' onPress={() => navigation.navigate('mainpage')} /> */}
      <Button title='Login' onPress={connect} />

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text>Do not have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text> Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#e8e8e8',
    flex: 1
  },
  text: {
    marginBottom: 10,
    fontSize: 25
  },
  input: {
    borderWidth: 2,
    marginBottom: 25,
    borderRadius: 10,
    paddingLeft: 8,
    borderColor: '#777',
    width: 200,
    height: 40
  }
})

export default LoginScreen;