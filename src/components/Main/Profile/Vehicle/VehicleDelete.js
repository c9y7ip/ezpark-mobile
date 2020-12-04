import React, { useState,useEffect }  from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput,TouchableOpacity,AsyncStorage, View,Image ,ViewBase, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker'
import config from '../../../../api/config';
import { useFocusEffect } from '@react-navigation/native';


const Stack = createStackNavigator();

function VehicleDelete({navigation}) {

  const [license, setLicense] = useState("");
  const [createBy, setCreatedBy] = useState("");
  const [Province, setProvince] = useState("");
  const [Description, setDesciption] = useState("");
  const [Session, setSession] = useState("");
  const [token, setToken] = useState("");

  let myCar = []


  let data = {license:license,
            createBy:createBy,
            Province:Province,
            Description:Description,
            Session:Session}

  
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

  const getCar = ()=>{
    console.log('get car info')
    console.log(token)
    return axios.get(`${config.baseURL}/car/get`,{
      headers:{Authorization:token}
    })
      .then(res=>{
        console.log(res)
        res.data.forEach(e => {
          console.log(e.license)
          myCar.push({label:e.license,value:e.license})
      });
        return res
      })
      .catch(err=>{
        console.log(err)
        return err
      })
  }

  useFocusEffect(()=>{
    async function run(){
      await getData();
      await getCar();
    }
    run()
  },[])

  const deleteCar = ()=>{
    console.log('Delete car info')
    console.log(token)
    return axios.post(`${config.baseURL}/car/delete`,{license:license},
    {
      headers:{Authorization:token}
    })
      .then(res=>{
        console.log(res.data)
        myCar.pop(license)
        return res
      })
      .then(res=>{
        navigation.navigate('profile')
        Alert.alert("Vehicle deleted !")
      })
      .catch(err=>{
        return err
      })
  }

  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>
      <Text style={styles.text}>Select license that want to remove</Text>
      <DropDownPicker
          placeholder="Select a car"
          items={myCar}
          containerStyle={{height:40,width:300,marginLeft:"14%"}}
          itemStlye={{justifyContent:'flex-start'}}
          onChangeItem={item => {
            setLicense(item.value)
        }}
      />   
       <TouchableOpacity style={styles.saveButtonCon} onPress={deleteCar}>
        <Text style={styles.saveButton}> Delete</Text>
      </TouchableOpacity>         
    </View>
    );
}

const styles = StyleSheet.create({
  label:{
    marginLeft: 15,
    marginTop: 10,
  },
  text:{
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
    textAlign:'center',
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
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
    marginHorizontal:"26%",
    marginTop:250,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
})

export default VehicleDelete;