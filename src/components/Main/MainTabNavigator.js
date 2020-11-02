import React from 'react'
import Dashboard from './Dashboard/DashboardNavigator';
import PersonInfo from './Profile/PersonInfo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'dashboard') {
                        iconName = focused
                            ? 'md-qr-scanner'
                            : 'md-qr-scanner';
                    } else if (route.name === 'personinfo') {
                        iconName = focused ? 'md-person' : 'md-person';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="dashboard" component={Dashboard} />
            <Tab.Screen name="personinfo" component={PersonInfo} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator