import React, { useState,useEffect }  from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput,TouchableOpacity,AsyncStorage, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Stack = createStackNavigator();
const baseURL = 'http://192.168.0.13:5000'
// const baseURL = 'http://35.202.57.20:5000'

function VehicleUpdate({navigation}) {

  const [license, setLicense] = useState("");
  const [createBy, setCreatedBy] = useState("");
  const [Province, setProvince] = useState("");
  const [Description, setDesciption] = useState("");
  const [Session, setSession] = useState("");
  const [token, setToken] = useState("");

  let data = {license:license,createBy:createBy,Province:Province,Description:Description,Session:Session}

  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      setToken(value)
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

  const connect = ()=>{

    console.log('Update car info')
    console.log(token)
    return axios.put(`${baseURL}/car/edit`,{data},{
      headers:{Authorization:token}
    })
      .then(res=>{
        console.log(res)
        return res
      })
      .catch(err=>{
        console.log(err)
        return err
      })

  }

  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>
         
      <Text style={styles.label}>License</Text>
      <TextInput style={styles.textInput} placeholder="license" onChangeText={text=>setLicense(text)} />

      <Text style={styles.label}>Created By</Text>
      <TextInput style={styles.textInput} placeholder="Created By" onChangeText={text=>setCreatedBy(text)} />

      <Text style={styles.label}>Province</Text>
      <TextInput style={styles.textInput} placeholder="Province" onChangeText={text=>setProvince(text)} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.textInput} placeholder="Description" onChangeText={text=>setDesciption(text)} />

      <Text style={styles.label}>Session</Text>
      <TextInput style={styles.textInput} placeholder="Session" onChangeText={text=>setSession(text)} />

      <TouchableOpacity style={styles.saveButtonCon} onPress={connect}>
        <Text style={styles.saveButton}> Save</Text>
      </TouchableOpacity>     
    </View>
    );
}

const styles = StyleSheet.create({
  label:{
    marginLeft: 15,
    marginTop: 10,
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  textInput: {
    padding: 5,
    marginLeft: 50,
    margin:5,
    marginRight:50,
    borderBottomColor: '#000', 
    borderBottomWidth: 2     
  },
  saveButton:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  saveButtonCon:{
    width:"50%",
    elevation: 1,
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    marginHorizontal:"22%",
    marginTop:20,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
})

export default VehicleUpdate;