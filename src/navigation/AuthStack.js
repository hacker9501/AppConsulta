import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/client/LoginScreen';
import SingUpScreen from '../screens/client/SingUpScreen';
import HomeScreen from '../screens/client/HomeScreen';
import LoginScreen from '../screens/doctor/LoginScreen';
import SingUpScreen from '../screens/doctor/SingUpScreen';
import HomeScreen from '../screens/doctor/HomeScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator initialRouteName='Login' headerMode='none'>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SingUpScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Logindoc' component={LoginScreen} />
        <Stack.Screen name='Signupdoc' component={SingUpScreen} />
        <Stack.Screen name='Homedoc' component={HomeScreen} />
      </Stack.Navigator>
    );
  }

  