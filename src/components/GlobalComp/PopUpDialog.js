import React from 'react'
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog'
import { StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const ContentContainer = styled.View`
    align-items: center;
    margin-top: 10px;
`
const StatusText = styled.Text`
    font-size: 25px;
`
const Description = styled.Text`
    font-size: 14px;
    padding: 15px 20px 20px 20px;
`

const PopUpDialog = (props) => {
    const { visible, setVisible, type, navigate } = props
    // use type ENUM to control what kinda of PopUpDialog to show.
    const navigation = useNavigation()

    console.log("Payment type: ", type)

    const success = type?.startsWith('success')

    console.log("Payment success : ", success)

    const onClose = () => {
        setVisible(false)
        setTimeout(() => {
            navigate(success)
        }, 100)
    }

    return (
        <Dialog visible={visible}
            width={0.7}
            dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
            })}
        >
            <DialogContent style={styles.contentStyle}>
                <View style={styles.closeBtn} >
                    <TouchableOpacity>
                        <AntDesign onPress={onClose} name="close" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                {success ?
                    < Ionicons style={styles.icon} name="ios-checkmark-circle" size={50} color="green" /> :
                    <AntDesign style={styles.icon} name="exclamationcircle" size={40} color="rgb(172,75,71)" />}
                <ContentContainer>
                    <StatusText>{getDescription(type).status}</StatusText>
                    <Description>{getDescription(type).text}</Description>
                </ContentContainer>
            </DialogContent>
        </Dialog>
    )
}

const getDescription = (type) => {
    let text = ""
    let status = type && type.startsWith('success') ? type === 'success-trial' ? 'Signup Completed' : 'Payment Successful' : 'Payment Failed'

    switch (type) {
        case 'success-payment':
            text = 'Your parking session has started'
            break;
        case 'fail-payment':
            text = 'Please update your payment method and try again.'
            break;
    }
    return {
        text: text,
        status: status
    }
}

export default PopUpDialog

const styles = StyleSheet.create({
    contentStyle: {
        padding: 30,
        paddingTop: 10,
        paddingRight: 10
    },
    icon: {
        alignSelf: 'center'
    },
    closeBtn: {
        alignItems: 'flex-end',
        width: '100%',
        height: 30
    }
});