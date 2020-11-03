import React from 'react'
import { View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import CustomButton from '../../GlobalComp/CustomButton'

const ScreenContainer = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`
const TitleText = styled.Text`
    margin-top: 50px;
    font-size: 20
`

const PaymentScreen = () => {

    const onPressPay = () => {
        //TODO implement payment logic
        alert('Process payment')
    }

    return (
        <ScreenContainer>
            <TitleText>Payment Screen</TitleText>
            <View style={styles.wrapper} >
                <CustomButton text="Confirm Payment" handler={onPressPay} customStyle={styles.btn} />
            </View>
        </ScreenContainer>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    btn: {
        width: '70%',
        height: 50,
    },
    wrapper: {
        width: '100%',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginTop: 600
    }
});