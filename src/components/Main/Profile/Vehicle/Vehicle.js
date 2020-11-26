import React,{useState,useEffect} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase,AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import VehicleInfo from './VehicleInfo';
const Stack = createStackNavigator();



function Vehicle({navigation}) {

  const [license, setlicense] = useState("");
  const [CreatedBy, setCreatedBy] = useState("");
  const [Province, setProvince] = useState("");
  const [Description, setDescription] = useState("");
  const [Session, setSession] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      if(value !== null) {
        console.warn(value)
      }
    } catch(e) {
      console.warn(e)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>

      <TouchableOpacity onPress={()=>navigation.navigate('VehicleInfo')}>
        <Text>Info</Text>
      </TouchableOpacity>    

      <TouchableOpacity onPress={()=>navigation.navigate('VehicleUpdate')}>
        <Text>Craete</Text>
      </TouchableOpacity>     

      <TouchableOpacity onPress={()=>navigation.navigate('VehicleUpdate')}>
        <Text>Delete</Text>
      </TouchableOpacity>    


    </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },  
  input: {
    borderWidth: 2,
    marginBottom: 25,
    borderRadius: 25,
    paddingLeft: 8,
    borderColor: '#777',
    width: 200,
  }
})

export default Vehicle;