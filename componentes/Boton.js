import React from "react";
import {StyleSheet,Text, TouchableOpacity  } from "react-native";


const Boton = (props) => {

    const {onPress,text} = props

    return (
        <TouchableOpacity 
            style={styles.boton}
            onPress={onPress}
        >
            <Text style={styles.botontext}>
                {text}
            </Text>

        </TouchableOpacity>
    )
}


export default Boton

const styles = StyleSheet.create({
    boton:{
        width:300,
        height:35,
        backgroundColor:'#000',
        borderRadius:30,
      },
      botontext:{
        color:'#fff',
        textAlign:'center',
        paddingTop:6,
        fontSize:15,
      }
})