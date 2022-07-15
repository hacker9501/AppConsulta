import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import index from "./Pantallaprincipal/Index";
import loginpaciente from "./screens/Loginpaciente";
import pacienteregista from "./screens/Registrarpaciente";
import logindoctor from "./screens/Logindoctor";
import doctorregistra from "./screens/Registrardoctor";

export default function App(){
    const Stack = createStackNavigator();
    return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Index" component={index} />
                    <Stack.Screen name="Loginpaciente" component={loginpaciente} />
                    <Stack.Screen name="Registrarpaciente" component={pacienteregista} />
                    <Stack.Screen name="Logindoctor" component={logindoctor} />
                    <Stack.Screen name="Registrardoctor" component={doctorregistra} />
                </Stack.Navigator>
            </NavigationContainer>
    
    );
}




