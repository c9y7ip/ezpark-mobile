// Code below are using expo-barcode-scanner
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

const Instruction = styled.Text`
    color: white;
    font-size: 17px;
`
const BackBtnContainer = styled.View`
    position: absolute;
    left: 33px;
    top: 60px;
    width: 100px;
    height: 40px;
`
const BtnText = styled.Text`
    color: white;
    font-size: 14px;
`

export default function ScanScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation()

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        navigation.navigate('payment', {
            parkingId: data
        })
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
            }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject, styles.container]}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            >
                <View style={styles.layerTop}>
                    <BackBtnContainer>
                        <BtnText onPress={() => navigation.goBack()}>Back</BtnText>
                    </BackBtnContainer>
                    <Instruction>Scan QRcode to pay for parking
                    </Instruction>
                </View>
                <View style={styles.layerCenter}>
                    <View style={styles.layerLeft} />
                    <View style={styles.focused} />
                    <View style={styles.layerRight} />
                </View>
                <View style={styles.layerBottom} />
            </BarCodeScanner>

            { scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View >
    );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    layerTop: {
        flex: 9,
        backgroundColor: opacity,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: '15%',
        paddingBottom: 10
    },
    layerCenter: {
        flex: 7,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 3
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 7,
        backgroundColor: opacity
    },
});