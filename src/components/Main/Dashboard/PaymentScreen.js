import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import styled from 'styled-components/native'
import CustomButton from '../../GlobalComp/CustomButton'
import DropdownComp from '../../GlobalComp/DropdownComp'
import { useNavigation } from '@react-navigation/native'
import PopUpDialog from '../../GlobalComp/PopUpDialog'
import carApi from '../../../api/carApi'
import parkingApi from '../../../api/parkingApi'
import paymentApi from '../../../api/paymentApi'

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
    font-size: 30px;
    margin-left: 20px;
`
const DurationSection = styled.View`
    margin-top: 30px
    flex-direction: row;
`
const InfoText = styled.Text`

`
const ParkingSection = styled.View`
    margin-top: 50px;
`


const PaymentScreen = (props) => {
    const { parkingId } = props.route.params
    const [parking, setParking] = useState(null)
    const [car, selectCar] = useState(null)
    const [cars, setCars] = useState([])
    const [showDialog, dialogToggle] = useState(false)
    const [status, setStatus] = useState(null)
    const [duration, onChangeDuration] = useState();

    const navigation = useNavigation()
    console.log(parkingId)
    useEffect(() => {
        fetch()
    }, [])

    const fetch = () => {
        //TODO: fetch cars by userId and parking by parkingId
        parkingApi.fetchParking(parkingId)
            .then(response => {
                setParking(response)
                return carApi.fetchCars()
            })
            .then(response => {
                const formatRes = formatCarResponse(response)
                console.log(formatRes)
                setCars(formatRes)
            })
    }

    const onPressPay = () => {

        const totalCost = parking.rate * duration
        const payload = {
            carId: car,
            duration: duration,
            parkingId: parkingId,
            totalCost: totalCost
        }
        paymentApi.charge(totalCost)
            .then(res => {
                console.log("Next step: create session")
                return parkingApi.createSession(payload)
            })
            .then(res => {
                console.log(res)
                setStatus('success-payment')
                dialogToggle(true)
            })
            .catch(err => {
                console.log(err)
                setStatus('fail-payment')
                dialogToggle(true)
            })
    }

    const onSelect = (carId) => {
        console.log(carId)
        selectCar(carId)
    }

    const navigateHandler = () => {
        navigation.navigate('menu')
    }

    return (
        <ScreenContainer>
            <TitleText>Payment Screen</TitleText>
            {parking &&
                <ParkingSection>
                    <InfoText>{getAddress(parking.address)}</InfoText>
                    <InfoText>{`Cost: $${parking.rate} CAD / hour`}</InfoText>
                </ParkingSection>}
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
                    keyboardType={'numeric'}
                />
                <HourText>Hour(s)</HourText>
            </DurationSection>
            {parking && duration && <View style={styles.totalCost} >
                <Text>{`Total Cost: $${duration * parking.rate} CAD`}</Text>
            </View>}

            <View style={styles.wrapper} >
                <CustomButton
                    text="Confirm Payment"
                    handler={onPressPay}
                    customStyle={styles.btn}
                    disabled={!(duration && parking && car)}
                />
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
        marginTop: 200,
    },
    input: {
        width: 100,
        height: 50,
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },
    totalCost: {
        marginTop: 30
    }
});

const formatCarResponse = (cars) => {
    let formatedList = cars.map((car) => {
        return {
            label: `${car.license}: ${car.description}`,
            value: car._id
        }
    })
    return formatedList
}

const getAddress = (json) => {
    return `Address: ${json.street} ${json.city} ${json.province}`
}