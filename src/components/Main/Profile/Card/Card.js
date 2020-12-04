import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image ,ViewBase, Alert } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components/native'
import LabeledInput from '../../../GlobalComp/LabeledInput'
import CustomButton from '../../../GlobalComp/CustomButton';
import paymentApi from '../../../../api/paymentApi'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InputWrap = styled.View`
  width: 80%;
`
/**
 *
 * Dummy cards
 card number: 4242424242424242
 cvv: 314
 expireDate: 0921
 */

function Card({route,navigation}) {
  const [state, setState] = useState({
    cardHolder: "",
    cardNumber: "",
    expireDate: '',
    cvv: '',
  })
  const addCard = () => {
    paymentApi.createToken(state)
      .then((card) => {
        return paymentApi.createCustomer(card.id)
      })
      .then((res) => {
        console.log(res)
        navigation.navigate('profile')
        Alert.alert("Card appended !")
      })
      .catch(err => Alert.alert("Information is not valid"))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbtn} onPress={() => navigation.navigate('profile')} >
        <Ionicons name="ios-arrow-back" size={24} color="black" />
      </TouchableOpacity>    

      <View style={styles.header} ></View>
      <InputWrap>
        <LabeledInput
          label={'Card Holder'}
          handler={(text) => {
            setState({ ...state, cardHolder: text })
          }}
        />
      </InputWrap>
      <InputWrap>
        <LabeledInput
          label={'Card Number'}
          handler={(text) => {
            setState({ ...state, cardNumber: text })
          }}
        />
      </InputWrap>
      <InputWrap>
        <LabeledInput
          label={'CVV'}
          handler={(text) => {
            setState({ ...state, cvv: text })
          }}
          maxLength={4}
        />
      </InputWrap>
      <InputWrap>
        <LabeledInput
          label={'Expiry Date'}
          placeholder={'MMYY'}
          handler={(text) => {
            setState({ ...state, expireDate: text })
          }}
          maxLength={4}
        />
      </InputWrap>
      <CustomButton
        customStyle={styles.btn}
        text="Add Card"
        handler={addCard}
      />
    </View>
    );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 200,
    height: 50,
    borderRadius: 10,
    marginTop: 50
  },
  backbtn: {
    position: 'absolute',
    left: 30,
    top: 80
  }
})

export default Card;