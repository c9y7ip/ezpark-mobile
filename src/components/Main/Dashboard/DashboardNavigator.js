import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen'
import PaymentScreen from './PaymentScreen';
import ScanScreen from './ScanScreen';

const Stack = createStackNavigator()

const DashboardNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name='menu' component={MenuScreen} />
            <Stack.Screen name='payment' component={PaymentScreen} />
            <Stack.Screen name='scan' component={ScanScreen} />
        </Stack.Navigator>
    )
}

export default DashboardNavigator