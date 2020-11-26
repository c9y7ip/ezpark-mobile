import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../GlobalComp/CustomButton'
import { useNavigation } from '@react-navigation/native';

function MenuScreen() {
  const navigation = useNavigation()

  const onPressPay = () => {
    navigation.navigate('scan')
  }

  const navigatePay = () => {
    navigation.navigate('payment')
  }

  return (
    <View style={styles.container} >
      <Text style={styles.title}>Dashboard</Text>
      <CustomButton text="Scan To Pay" handler={onPressPay} customStyle={btnStyle} />
      <CustomButton text="Payment" handler={navigatePay} />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    flex: 1
  },
  logo: {
    width: 50,
    height: 50,
    left: "150%",
  },
  button: {
    flex: 0.5,
    flexDirection: "row"
  },
  title: {
    position: 'absolute',
    top: 60,
    fontSize: 30
  }
})

const btnStyle = {
  borderRadius: 100,
  width: 200,
  height: 200
}

export default MenuScreen;