import React , { useState,useEffect }from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ViewBase,AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Card from './Card/Card';
import Vehicle from './Vehicle/VehicleHomePage';
import VehicleUpdate from './Vehicle/VehicleUpdate';
import VehicleInfo from './Vehicle/VehicleInfo';
import AuthStack from '../../Auth/AuthNavigator';
import axios from 'axios';
import config from '../../../api/config';
import { useFocusEffect } from '@react-navigation/native';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function profile({navigation}) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  useEffect(()=>{
    async function run(){
      const token =  await getToken();
      console.log("......",token)
      await infoConnect(token);
    }
    run()
  },[])

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      // setToken(value)
      if (value !== null) {
        console.warn(value)
        return value
      }
    } catch (e) {
      console.warn(e)
    }
  }

  const signOut = async() =>{
    try{
      await AsyncStorage.removeItem("token")
      navigation.navigate('auth')
    }catch(e){
      console.warn(e.message)
    }
  }

  const infoConnect = (token)=>{

    console.log('getting user info')
    console.log(token)
    console.warn(config.baseURL)
    return axios.get(`${config.baseURL}/auth/user`,{
      headers:{Authorization:token}
    })
      .then(res=>{  
        console.warn(res.data)
        console.log(res.data.name)
        setName(res.data.name);
        setPhone(res.data.phone);
        setMail(res.data.email);
        return res
      })
      .catch(err=>{
        console.warn("----->1",err)
        return err
      })

  }


  return (
    <View>
      <View style={styles.header}></View>
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.btnContainerStyle} onPress={()=>navigation.navigate('Vehicle')}>
          <Text style={styles.btnTextStyle}> Vehicle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnContainerStyle} onPress={()=>navigation.navigate('Card')}>
          <Text style={styles.btnTextStyle}> Card </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textDisplay}>Name : {name}</Text>
      <Text style={styles.textDisplay}>Phone : {phone}</Text>
      <Text style={styles.textDisplay}>Email : {mail}</Text>
      <Text style={styles.textDisplay}>Vehicle</Text>
      <Text style={styles.textDisplay}>Parking info</Text>
      
      <TouchableOpacity style={{alignItems:"center"}} onPress={signOut}>
          <Text style={styles.logout}> LOG OUT </Text>
        </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  },
  btnContainerStyle: {
    backgroundColor: '#3F51B5',
    paddingVertical: 8,
    width: "35%",
    margin: 30,
    borderRadius: 5,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  logout: {
    fontSize: 20,
    color:"red",
    marginTop:"30%",
  },
  textDisplay:{
    alignContent:'space-around',
    fontWeight:'bold',
    fontSize:20,
  }
})

export default profile;