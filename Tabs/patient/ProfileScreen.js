import * as React from 'react';
import { Text, View,Image,StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../assets/doc3.jpg';

export default function ProfileScreen() {
    return (
      <SafeAreaView>
          <View >
            <Image
            style={styles.img}
            source={require('../../assets/doc3.jpg')}
            />
            <View style={styles.tex1}>
            <Text>Maria Elena</Text>
            </View>
          </View>
          <View  style={styles.tex2}>
            
            <Text>Setting</Text>
          </View>
          <View  style={styles.tex3}>
           
            <Text>Log Uot</Text>
          </View>
     </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    img:{
      width: 100,
      height: 100,
      marginTop: 20,
      marginBottom: 20,
      left:25,
    },
    tex1:{
      position: 'absolute',
      top:60,
      left:170,
    },
    tex2:{
      left:25,
      marginBottom:10,
    },
    tex3:{
      left:25,
    },

  });