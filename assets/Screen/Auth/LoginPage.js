// set 2 color : https://colorhunt.co/palette/212648

import React , {useState} from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';

const Stack = createStackNavigator();


const LoginPage =  ({navigation}) => {

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");

  const connect = ()=>{

    fetch('http://192.168.0.13:3000/show',{
      method:'post',
  
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
  
      body: JSON.stringify({
        account: account,
        password: password
      })
    })
    .then(res=>res.json())
    .catch(function(error){
      console.error(error.message);
    })
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Log In</Text>
        <TextInput style={styles.input} placeholder="Account"  onChangeText={text=>setAccount(text)}/>
        <TextInput style={styles.input} placeholder="Password"  onChangeText={text=>setPassword(text)}/>
        <Button title='Login'  onPress={()=>navigation.navigate('mainpage')}/>
        {/* <Button title='Login' onPress={connect}/> */}

        <View style={{flexDirection:"row",marginTop:15}}>
        <Text>Do not have account?</Text>  
        <TouchableOpacity onPress={()=>navigation.navigate('register')}>
          <Text> Sign Up</Text>
        </TouchableOpacity>        
        </View>

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
  text:{
    marginBottom:10,
    fontSize:25
  },
  input:{
    borderWidth:2,
    marginBottom:25,
    borderRadius:25,
    paddingLeft:8,
    borderColor:'#777',
    width:200,
  }
})

export default LoginPage;