import React from "react";
import { View,Text,Image } from "react-native";
import Boton from '../componentes/Boton';

export default function Registrardoctor (){
    return(
        <View>
            <Text>App Medical</Text>
            <Text>DOCTOR</Text>
            
            <TextInput placeholder="Nombre" placeholderTextcolor="black" maxLength={10} 
            style={{borderWidth:1,borderColor:'white', padding :5,marginTop:10}}></TextInput>

            <TextInput placeholder="Email" placeholderTextcolor="black" maxLength={10} 
            style={{borderWidth:1,borderColor:'white', padding :5,marginTop:10}}></TextInput>

            <TextInput placeholder="Contraseña" placeholderTextcolor="black" maxLength={10} 
            style={{borderWidth:1,borderColor:'white', padding :5,marginTop:10}}></TextInput>
            
            <TextInput placeholder="Confirmar Contraseña" placeholderTextcolor="black" maxLength={10} 
            style={{borderWidth:1,borderColor:'white', padding :5,marginTop:10}}></TextInput>

            <Boton text="Registrase"/>
            <Text>¿Ya Tienes una Cuenta?</Text>
            <Text>Sign up</Text>
        </View>
    );
}

