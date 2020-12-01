import React, { useState,useEffect,PropTypes  }  from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput,TouchableOpacity,AsyncStorage, View,Image ,ViewBase, Picker, Alert  } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker'
import config from '../../../../api/config';
import styled from 'styled-components'
const Stack = createStackNavigator();

const DropdownContainer = styled.View`
    align-items: center;
    height: 50px;
`

function VehicleCreate({navigation}) {

  const [license, setLicense] = useState("");
  const [type, setType] = useState("");
  const [province, setProvince] = useState("");
  const [description, setDesciption] = useState("");
  const [sessions, setSession] = useState("");
  const [token, setToken] = useState("");

  // let data = {license:license,type:type,province:province,description:description,sessions:sessions}
  let data = {license:license,
              type:type,
              province:province,
              description:description}

  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      setToken(value)
      if(value !== null) {
        // console.warn(value)
        return value
      }
    } catch(e) {
      console.warn(e)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const connect = ()=>{

    console.log('Create car info')
    console.log(token)
    return axios.post(`${config.baseURL}/car/add`,data,{
      headers:{Authorization:token}
    })
      .then(res=>{
        console.log(res)
        return res
      })
      .then(res=>{
        navigation.navigate('profile')
        Alert.alert("Vehicle created !")
      })
      .catch(err=>{
        console.log(err)
        Alert.alert("All fields need to be fills")
      })

  }

  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>
         
      <Text style={styles.label}>License</Text>
      <TextInput style={styles.textInput} placeholder="license" onChangeText={text=>setLicense(text)} />
      
      <Text style={styles.label}>Type</Text>
      <DropDownPicker
          defaultValue={null}
          placeholder="Select vehicle type" 
          items={[
            {label:"car",value:"car"},
            {label:"truck",value:"truck"},
            {label:"motorcycle",value:"motorcycle"}
          ]}
          containerStyle={{height:40,width:300,marginLeft:"14%"}}
          itemStlye={{justifyContent:'flex-start'}}
          onChangeItem={item => {
            setType(item.value)
        }}
      />

        

      <Text style={styles.label}>Province</Text>
      <TextInput style={styles.textInput} placeholder="Province" onChangeText={text=>setProvince(text)} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.textInput} placeholder="Description" onChangeText={text=>setDesciption(text)} />

      {/* <Text style={styles.label}>Session</Text>
      <TextInput style={styles.textInput} placeholder="Session" onChangeText={text=>setSession(text)} /> */}

      <TouchableOpacity style={styles.saveButtonCon} onPress={connect}>
        <Text style={styles.saveButton}> Create</Text>
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

export default VehicleCreate;