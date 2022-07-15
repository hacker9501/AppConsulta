import React  from 'react'
import {View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPaciente from "./screens/Loginpaciente";
import Pacienteregista from "./screens/Registrarpaciente";
import Logindoctor from "./screens/Logindoctor";
import RegistrarDoctor from "./screens/Registrardoctor";
import Principal from './screens/Pantallaprincipal'; 
import HomePaciente from './screens/HomePaciente';

export default function App(){
    const Stack = createNativeStackNavigator();
    return( 
        
        <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Principal" component={Principal} />
                        <Stack.Screen name="Login" component={LoginPaciente}/>
                        {/*<Stack.Screen name="Loginpaciente" component={loginpaciente} />
                        <Stack.Screen name="Registrarpaciente" component={pacienteregista} />
                        <Stack.Screen name="Logindoctor" component={logindoctor} />
                        <Stack.Screen name="Registrardoctor" component={doctorregistra} /> */}
                    </Stack.Navigator>
        </NavigationContainer>
       
        
        
    );
}




