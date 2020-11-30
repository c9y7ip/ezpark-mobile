import React,{useState,useEffect} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase,AsyncStorage } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';
import VehicleCreate from './VehicleCraete';
import VehicleDelete from './VehicleDelete';
import VehicleInfo from './VehicleInfo';
const Stack = createStackNavigator();



function Vehicle({navigation}) {

  const [license, setlicense] = useState("");
  const [CreatedBy, setCreatedBy] = useState("");
  const [Province, setProvince] = useState("");
  const [Description, setDescription] = useState("");
  const [Session, setSession] = useState("");

  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>

      <TouchableOpacity style={styles.btnContainerStyle} onPress={()=>navigation.navigate('VehicleInfo')}>
        <Text style={styles.btnTextStyle}>Info</Text>
      </TouchableOpacity>    

      <TouchableOpacity style={styles.btnContainerStyle} onPress={()=>navigation.navigate('VehicleCreate')}>
        <Text style={styles.btnTextStyle}>Craete</Text>
      </TouchableOpacity>     

      <TouchableOpacity style={styles.btnContainerStyle} onPress={()=>navigation.navigate('VehicleDelete')}>
        <Text style={styles.btnTextStyle}>Delete</Text>
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
  },
  btnContainerStyle: {
    alignItems:'center',
    backgroundColor: '#3F51B5',
    paddingVertical: 15,
    margin: 30,
    marginTop:"10%",
    borderRadius: 5,
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})

export default Vehicle;