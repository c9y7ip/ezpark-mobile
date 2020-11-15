import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
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
const HourText = styled.Text`
    font-size: 50px;
    margin-left: 20px;
`
const DurationSection = styled.View`
    margin-top: 30px
    flex-direction: row;
`

const PaymentScreen = () => {
    const [car, selectCar] = useState(null)
    const [cars, setCars] = useState([])
    const [showDialog, dialogToggle] = useState(false)
    const [status, setStatus] = useState(null)
    const [duration, onChangeDuration] = useState();

    const navigation = useNavigation()

    useEffect(() => {
        fetchCars()
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

            <DurationSection>
                <TextInput
                    style={styles.input}
                    onChangeText={text => onChangeDuration(text)}
                    value={value}
                    keyboardType={'numeric'}
                />
                <HourText>Hr</HourText>
            </DurationSection>

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
    },
    input: {
        width: 100,
        height: 50,
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    }
});