import React , {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput,TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function VehicleUpdate({navigation}) {

  const [license, setLicense] = useState("");
  const [createBy, setCreatedBy] = useState("");
  const [Province, setProvince] = useState("");
  const [Description, setDesciption] = useState("");
  const [Session, setSession] = useState("");

  let data = {license:license,createBy:createBy,Province:Province,Description:Description,Session:Session}

  const connect = ()=>{

    fetch('http://localhost:3000/show',{
      method:'post',
  
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
  
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .catch(function(error){
      console.error(error.message);
    })
  }

  return (
    <View style={styles.container}>   
      <View style={styles.header}></View>
         
      <Text>license</Text>
      <TextInput style={styles.textInput} placeholder="license" onChangeText={text=>setLicense(text)} />

      <Text>Created By</Text>
      <TextInput style={styles.textInput} placeholder="Created By" onChangeText={text=>setCreatedBy(text)} />

      <Text>Province</Text>
      <TextInput style={styles.textInput} placeholder="Province" onChangeText={text=>setProvince(text)} />

      <Text>Description</Text>
      <TextInput style={styles.textInput} placeholder="Description" onChangeText={text=>setDesciption(text)} />

      <Text>Session</Text>
      <TextInput style={styles.textInput} placeholder="Session" onChangeText={text=>setSession(text)} />

      <TouchableOpacity onPress={connect}>
        <Text>Save</Text>
      </TouchableOpacity>     
    </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  textInput: {
    padding: 10,
    marginLeft: 50,
    margin:5,
    marginRight:50,
    borderBottomColor: '#000', 
    borderBottomWidth: 2     
}
})

export default VehicleUpdate;