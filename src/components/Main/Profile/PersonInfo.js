import React , { useState,useEffect }from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItem,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Card from './Card/Card';
import Vehicle from './Vehicle/Vehicle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function profile({navigation}) {

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
    <View>
      <View style={styles.header}></View>
      <Text>Name</Text>
      <Text>phone</Text>
      <Text>Email</Text>
      <Text>vehicle</Text>
      <Text>Parking info</Text>
      <Button title="back" onPress={()=>navigation.navigate('home')} />
    </View>
  )
}

function draw({navigation}) {
  
  const signOut = async() =>{
    try{
      await AsyncStorage.removeItem("token")
      navigation.navigate('home')
    }catch(e){
      console.warn(e.message)
    }
  }
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props=>{
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}/>
          <DrawerItem label="logout" onPress={signOut}/>
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Profile" component={profile} />
      <Drawer.Screen name="Card" component={Card} />
      <Drawer.Screen name="Vehicle" component={Vehicle} />
     </Drawer.Navigator>
  )
}

function PersonInfo({ navigation }) {

  return (
    <Stack.Navigator>
      <Stack.Screen name="test" options={{ headerShown: false }} component={draw} />
    </Stack.Navigator>

  );
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 200,
  }
})

export default PersonInfo;