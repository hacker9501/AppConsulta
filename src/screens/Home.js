import React from 'react';
import { View,Text, StyleSheet, Dimensions, Image } from "react-native";
import {Button } from 'react-native-paper'

const { width, height } = Dimensions.get('screen');

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
           <Text style={styles.title}>App</Text>
           <Image
           style={styles.img}
             source={{
                uri: 'https://img.freepik.com/vector-gratis/doctor-lindo-mujer-que-sostiene-ilustracion-arte-historieta-dibujada-mano-vacuna-jeringa_56104-966.jpg',
              }}
           />
           <Button mode="contained"
           color="#000"
           buttonColor="black"
           style={styles.button}
           labelStyle={{ color: "white", fontSize: 18 }}
           contentStyle={styles.buttonContainer}
           onPress={() => navigation.navigate('Login')}
           >
            Sign Up
           </Button>
           <Button
            labelStyle={{ color: "#4361ee", fontSize: 14 }}
            onPress={() => navigation.navigate('Logindoc')}
           >
            ¿Eres doctor? Sing up
           </Button>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    singUpContainer: {
        height: 5,
        flex: 1,
        flexDirection:'row',
    },
    button: {
        marginTop: 10,
      },
      buttonContainer: {
        width: width / 2,
        height: height / 15
    },
    img: {
       width: 300,
       height: 250,
       marginTop: 20,
       marginBottom: 20
    }


})