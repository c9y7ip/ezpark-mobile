// set 2 color : https://colorhunt.co/palette/212648

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ViewBase, Alert } from 'react-native';


const Stack = createStackNavigator();

function RegisterScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const connect = () => {

    if (password == passwordConfirm) {
      fetch('http://192.168.0.13:3000/show', {
        method: 'post',

        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          account: email,
          password: password,
          phone: phone
        })
      })
        .then(res => res.json())
        .catch(function (error) {
          console.error(error.message);
        })
    } else {
      Alert.alert("Password incorrect");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={text => setEmail(text)} />
      <TextInput placeholder="Password" style={styles.input} onChangeText={text => setPassword(text)} />
      <TextInput placeholder="Password confirm" style={styles.input} onChangeText={text => setPasswordConfirm(text)} />
      <TextInput placeholder="Phone" style={styles.input} onChangeText={text => setPhone(text)} />
      <Button title='Sign Up' onPress={connect} />

      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Text>Already have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('loginpage')}>
          <Text> Login</Text>
        </TouchableOpacity>
      </View>

    </View>

  );

}


const styles = StyleSheet.create({
  container: {
    paddingTop: "50%",
    backgroundColor: '#e8e8e8',
    alignItems: "center",
    flex: 1
  },
  text: {
    marginBottom: 10,
    fontSize: 25
  },
  input: {
    borderWidth: 2,
    marginBottom: 15,
    borderRadius: 25,
    paddingLeft: 8,
    borderColor: '#777',
    width: 200,
  }

})

export default RegisterScreen;