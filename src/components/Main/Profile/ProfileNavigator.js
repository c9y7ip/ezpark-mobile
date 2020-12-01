
import React from 'react'


import { createStackNavigator } from '@react-navigation/stack';
import Profile from './PersonInfo';
import VehicleInfo from './Vehicle/VehicleInfo';
import VehicleUpdate from './Vehicle/VehicleUpdate';
import Vehicle from './Vehicle/VehicleHomePage';
import VehicleCreate from './Vehicle/VehicleCraete';
import VehicleDelete from './Vehicle/VehicleDelete';
import Card from './Card/Card';



const Stack = createStackNavigator()

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="profile" options={{ headerShown: false }} component={Profile} />
            <Stack.Screen name="Vehicle" options={{ headerShown: false }} component={Vehicle} />
            <Stack.Screen name="VehicleInfo" options={{ headerShown: false }} component={VehicleInfo} />
            <Stack.Screen name="VehicleCreate" options={{ headerShown: false }} component={VehicleCreate} />
            <Stack.Screen name="VehicleDelete" options={{ headerShown: false }} component={VehicleDelete} />
            <Stack.Screen name="Card" options={{ headerShown: false }} component={Card} />
      </Stack.Navigator>
    );
}

export default ProfileStack