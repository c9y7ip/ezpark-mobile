import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Dshboard</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    backgroundColor: '#e8e8e8',
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
  }
})

export default MenuScreen;