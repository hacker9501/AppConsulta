import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/client/LoginScreen';
import SingUpScreen from '../screens/client/SingUpScreen';
import LoginDocScreen from '../screens/doctor/LoginDocScreen';
import SingUpDocScreen from '../screens/doctor/SingUpDocScreen';
import Home from './../screens/Home';


const Stack = createStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator initialRouteName='Home' headerShown='false'>
        <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
        />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Signup' component={SingUpScreen} />
        <Stack.Screen name='Logindoc' component={LoginDocScreen} />
        <Stack.Screen name='Signupdoc' component={SingUpDocScreen} />
      </Stack.Navigator>
    );
  }

  