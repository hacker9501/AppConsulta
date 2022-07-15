import React from "react";
import { View,Text,TextInput} from "react-native";
import Boton from '../componentes/Boton';

export default function LoginPaciente () {
    return(
        <View>
            <Text>App Medical</Text>
            
            <Text>PATIENT</Text>

            <TextInput placeholder="Ingresa Nombre o Email" placeholderTextcolor="black" maxLength={10} 
            style={{borderWidth:1,borderColor:'white', padding :5,marginTop:10}}></TextInput>

            <TextInput placeholder="Contraseña" placeholderTextcolor="black" maxLength={10} 
            style={{borderWidth:1,borderColor:'white', padding :5,marginTop:10}}></TextInput>
            
            <Boton text="Iniciar Sesion"/>
            <Text>¿No Tienes una Cuenta?</Text>
            <Text>Sign up</Text>
        </View>
    );
}

