import * as React from 'react';
import { Text, View,Image, Button,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormButton from '../../src/components/FormButton';
import  '../../assets/doc4png.png';
import '../../assets/doc1.jpg';
import '../../assets/doct2.jpg';
import '../../assets/doc3.jpg';

export default function HomeScreen() {
    return (
      <SafeAreaView>
        <ScrollView>
            <Image
            style={styles.imgprin}
            source={require('../../assets/doc4png.png')}
            />
            <View style={styles.tex1}>
              <Text>Hola,</Text>
              <Text>Maria Elena</Text>
            </View>
            <View style={styles.buscador}>
              <Searchbar/>
            </View>
            <View style={styles.fisi}>
            <Text >Fisioterapias</Text>
            </View>
            <View>
              <Image 
              style={styles.img1}
              source={require('../../assets/doc1.jpg')}
              />
              <View style={styles.tex2} >
              <Text>Hola,</Text>
              <Text>Maria Elena</Text>
              </View>
              <View style={styles.doc2}>
              <Image
              style={styles.img}
              source={require('../../assets/doct2.jpg')}
              />
              <View style={styles.tex3}>
              <Text>Hola,</Text>
              <Text>Maria Elena</Text>
              </View>
              </View>
            </View>
            <View style={styles.buttons}>
            <FormButton title="Online"/>
            <FormButton title="Offline"/>
            </View>
            <View>
              <Image 
              style={styles.img}
              source={require('../../assets/doc3.jpg')}
              />
              <View style={styles.tex4}>
              <Text>Hola,</Text>
              <Text>Maria Elena</Text>
              </View>
            </View>

        </ScrollView>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    buscador: {
      padding: 15,
    },
    imgprin:{
      width: 100,
      height: 130,
      marginTop: 20,
      marginBottom: 20,
      left:25,
    },
    img:{
      width: 100,
      height: 100,
      marginTop: 20,
      marginBottom: 20,
      left:25,
      borderRadius: 3,
    },
    img1:{
      width: 100,
      height: 100,
      marginTop: 20,
      marginBottom: 20,
      position: 'absolute',
      top:0,
      left:200,
      borderRadius: 3,
    },
    tex1:{
      left:25,
    },
    fisi:{
      left:25,
    },
    tex2:{
      left:25,
      position: 'absolute',
      top:140,
      left:210,
    },
    tex3:{
      left:25,
    },
    tex4:{
      position: 'absolute',
      top:50,
      left:150,
    },
    doc2:{
      flex:1,
      
    },
    buttons:{
      flex:1,
      flexDirection: 'row',
    }
  });