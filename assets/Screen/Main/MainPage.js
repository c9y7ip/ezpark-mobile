import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import PersonInfo from './PersonInfo';

const Tab = createBottomTabNavigator();

// set 2 color : https://colorhunt.co/palette/212648

function MainPage({navigation}) {
  return (
      <NavigationContainer>
          <Tab.Navigator>
              <Tab.Screen name="dashboard" component={Dashboard}/>
              <Tab.Screen name="personinfo" component={PersonInfo}/>
          </Tab.Navigator>
      </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container:{
    justifyContent:"flex-end",
    backgroundColor:'#e8e8e8',
    flex:1
  },
  logo:{
      width:50,
      height:50,
      left:"150%",
  },
  button:{
    flex:0.5,
    flexDirection:"row"
  }
})

export default MainPage;