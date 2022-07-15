import React from "react";

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView} from 'react-native'
import Boton from '../componentes/Boton'
import { Link, NavigationContainer } from '@react-navigation/native'


export default function Principal({navigation}) {
  return (
    
      <View style={styles.container}>
        <Text style={styles.titulo}>App Medical</Text>
        <Image source={require('../assets/doctor.png')} style={{ width: 450, height:450, resizeMode:'contain'}}/>
        <Text style={styles.subTitle}>Consult Especialist Doctors</Text>
        <Text style={styles.subTitle2}>Securely And Privotely</Text>
        <Text style={styles.parrafo}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Architecto id magni reprehenderit aliquam unde cupiditate omnis aut neque, illo nostrum.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Architecto id magni reprehenderit aliquam unde cupiditate omnis aut neque, illo nostrum. {'\n'} {'\n'}</Text>
        <Boton text="Sign up" onpress={()=> navigation.navigate('Login')}
        />
        <View style={styles.ingresar}>
        <Text style={styles.textofooter1}>¿Eres Doctor?</Text>
        <Link to="Loginpaciente">
        <Text style={styles.textofooter2} >Sign up</Text>
        </Link>
        </View>
        <TouchableOpacity style={styles.boton2}>
          <Text></Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titulo:{
    marginTop:30,
    fontSize:40,
    color:'#000',
    fontWeight:'bold',
  },
  subTitle:{
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
    marginTop:10,
  },
  subTitle2:{
    fontSize:20,
    color:'#000',
    fontWeight:'bold',
    marginTop:10,
  },
  parrafo:{
    marginTop:30,
    textAlign:'center',    
  },
 
  textofooter1:{
    color:'#000',
    paddingRight:10,
  },
  textofooter2:{
    color:'blue',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  ingresar:{
    marginTop:20,
    flex:1,
    flexDirection:'row',
  },
  boton2:{
    width:200,
    height:3,
    backgroundColor:'#000',
    borderRadius:30,
    marginVertical:50,
    
  },
});