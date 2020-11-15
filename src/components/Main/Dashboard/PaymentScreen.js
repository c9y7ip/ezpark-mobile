import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components/native'
import CustomButton from '../../GlobalComp/CustomButton'
import DropdownComp from '../../GlobalComp/DropdownComp'
import { useNavigation } from '@react-navigation/native'
import PopUpDialog from '../../GlobalComp/PopUpDialog'

const ScreenContainer = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
`
const TitleText = styled.Text`
    margin-top: 50px;
    font-size: 20
`
const DropdownWrapper = styled.View`
    margin-top: 30px;
    width: 100%
`

const PaymentScreen = () => {
    const [car, selectCar] = useState(null)
    const [cars, setCars] = useState([])
    const [showDialog, dialogToggle] = useState(false)
    const [status, setStatus] = useState(null)

    const navigation = useNavigation()

    useEffect(() => {

    }, [])

    const fetchCars = () => {
        //TODO: fetch cars by userId.
    }

    const onPressPay = () => {
        //TODO implement payment logic
        setStatus('success-payment')
        dialogToggle(true)
    }

    const onSelect = () => {

    }

    const onChangeDuration = () => {
        // TODO: implement getPrice call based on duration
    }

    const navigateHandler = () => {
        navigation.navigate('menu')
    }

    return (
        <ScreenContainer>
            <TitleText>Payment Screen</TitleText>
            <DropdownWrapper>
                <DropdownComp
                    items={cars}
                    placeholder="Select a car"
                    selectHandler={onSelect}
                />
            </DropdownWrapper>

            <View style={styles.wrapper} >
                <CustomButton text="Confirm Payment" handler={onPressPay} customStyle={styles.btn} />
            </View>
            <PopUpDialog
                visible={showDialog}
                type={status}
                setVisible={dialogToggle}
                navigate={navigateHandler}
            />
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
        marginTop: 500,
    }
});