import * as React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import '../../assets/doct2.jpg';
import FormButton from '../../src/components/FormButton';

export default function AppointmentScreen() {
    return (
      <View>
        <View style={styles.tex1}>
        <Text>Reminder</Text>
        </View>
        <View style={styles.tex2}>
        <Text>Dont forget schedule for upcoming appointment</Text>
        </View>
        <View style={styles.contenido}>
          <View style={styles.tex3}>
          <Text>Dr. Charollette Baker</Text>
          <Text>Physiotherapy</Text>
          </View>
          <Image 
            style={styles.img}
            source={require('../../assets/doct2.jpg')}
          />
        </View>
        <View>

      </View>
      <View style={styles.btn}>
        <FormButton title="Cancel"/>
      </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    img:{
      width: 100,
      height: 100,
      marginTop: 20,
      marginBottom: 20,
      position: 'absolute',
      top:-20,
      left:200,
    },
    tex1:{
      left:30,
    },
    tex2:{
      left:30,
      marginBottom: 15,
    },
    tex3:{
      position: 'absolute',
      top:30,
      left:30,
    },
    contenido:{
      marginBottom:10,
    },
    btn:{
      top:200,
      left:100,
    }

  });