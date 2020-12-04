import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage, View, Image, ViewBase, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import config from '../../../../api/config';
import { useFocusEffect } from '@react-navigation/native';
import apiClient from '../../../../api/apiClient';
import { ScrollView } from 'react-native-gesture-handler';


function VehicleInfo({ navigation }) {

  const [display, setDisplay] = useState([]);
  // const [token, setToken] = useState("");

  // const [license, setLicense] = useState([]);
  // const [createBy, setCreatedBy] = useState([]);
  // const [province, setProvince] = useState([]);
  // const [description, setDescription] = useState([]);
  // const [type, setType] = useState([]);

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token")
      // setToken(value)
      if (value !== null) {
        // console.warn(value)
        return value
      }
    } catch (e) {
      console.warn(e)
    }
  }

  const connect = (token) => {
    console.log('get car info')
    console.log(token)
    return axios.get(`${config.baseURL}/car/get`, {
      headers: { Authorization: token }
    })
      .then(res => {
        console.log(res.data)  // data what I need
        setDisplay(res.data) // that's correct
        return res.data
      })
      // .then( data =>{console.warn(display)})
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(()=>{
    async function run(){
      const token =  await getToken();
      console.log("......",token)
      await connect(token);
    }
    run()
  },[])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView>
      {
        display.map((car)=>(
          <ScrollView>
            <Text style={styles.label}>License: {car.license}</Text>
            <Text style={styles.label}>Type: {car.type}</Text>
            <Text style={styles.label}>Province: {car.province}</Text>
            <Text style={styles.label}>Description: {car.description}</Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 20 }} />
          </ScrollView>
        ))
      }
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  label: {
    marginLeft: 15,
    marginTop: 10,
  },
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
    marginBottom: 5,
  },
  textInput: {
    padding: 5,
    marginLeft: 50,
    margin: 5,
    marginRight: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 2
  },
  saveButton: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  saveButtonCon: {
    width: "25%",
    elevation: 1,
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    marginHorizontal: "30%",
    // marginTop:5,
    paddingVertical: 5,
    paddingHorizontal: 12,
  }
})

export default VehicleInfo;