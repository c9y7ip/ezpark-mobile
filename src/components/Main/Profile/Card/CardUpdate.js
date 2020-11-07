import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function CardUpdate({navigation}) {

  const [cardHolder, setcardHolder] = useState("");
  const [cardNum, setcardNUm] = useState("");
  const [CVV, setCVV] = useState("");
  const [expierdDate, setexpierdDate] = useState("");

  let data = {cardHolder:cardHolder,cardNum:cardNum,CVV:CVV,expierdDate:expierdDate}

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
      <View style={styles.header} ></View>

      <Text>Card Holder</Text>
      <TextInput style={styles.textInput} placeholder="Card Holder" onChangeText={text=>setcardHolder(text)} />

      <Text>Card Nunmber</Text>
      <TextInput style={styles.textInput} placeholder="Card Nunmber"onChangeText={text=>setcardNUm(text)}/>

      <Text>CVV</Text>
      <TextInput style={styles.textInput} placeholder="CVV" onChangeText={text=>setCVV(text)} />

      <Text>Expierd Date</Text>
      <TextInput style={styles.textInput} placeholder="Expierd Date"onChangeText={text=>setexpierdDate(text)}/>

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

export default CardUpdate;