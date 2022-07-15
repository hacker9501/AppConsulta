import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Tabs/HomeScreen';
import ChatScreen from '../Tabs/ChatScreen';
import AppointmentScreen from '../Tabs/AppointmentScreen';
import ProfileScreen from '../Tabs/ProfileScreen';

const Tab = createBottomTabNavigator();

const MyTabs =() =>{
    return(<Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Citas" component={AppointmentScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>)
}

export default function HomePaciente() {
    
    return (
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
  }