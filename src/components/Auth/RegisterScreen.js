// set 2 color : https://colorhunt.co/palette/212648

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ViewBase, Alert } from 'react-native';
import authApi from '../../api/authApi'

const Stack = createStackNavigator();

function RegisterScreen({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const connect = () => {
    console.log('sign up')
    if (password === passwordConfirm) {
      console.log('ahha')
      authApi.register(name, password, email, phone)
        .then((user) => {
          console.log(user)
          //DO something with user.
          navigation.navigate('home')
          Alert.alert("Account created !")
        }).catch(err => {
          console.log(err)
          Alert.alert("All fields need to be fill")
        })

    } else {
      Alert.alert("Confirm password doesn't match");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput placeholder="Name" style={styles.input} onChangeText={text => setName(text)} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={text => setEmail(text)} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} onChangeText={text => setPassword(text)} />
      <TextInput placeholder="Password confirm" secureTextEntry={true} style={styles.input} onChangeText={text => setPasswordConfirm(text)} />
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
    borderRadius: 10,
    paddingLeft: 8,
    borderColor: '#777',
    width: 200,
    height: 40
  }

})

export default RegisterScreen;