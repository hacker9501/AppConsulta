import React from 'react';
import {Text,SafeAreaView,ScrollView,Image,StyleSheet,View} from 'react-native';

export default function HomeScreen () {
    return (
        <SafeAreaView>
        <ScrollView>
            <Image
            style={styles.imgprin}
            source={require('../../assets/doctorper.jpg')}
            />
            <View style={styles.tex1}>
              <Text>Hola,</Text>
              <Text>Dr. Alexander</Text>
            </View>
            <View style={styles.fisi}>
            <Text >Citas de Hoy</Text>
            </View>
            <View>
              <Image 
              style={styles.img1}
              source={require('../../assets/hola.jpg')}
              />
              <View style={styles.tex2} >
              <Text>Hola,</Text>
              <Text>Maria Elena</Text>
              </View>
              <View style={styles.doc2}>
              <Image
              style={styles.img}
              source={require('../../assets/per.jpg')}
              />
              <View style={styles.tex3}>
              <Text>Hola,</Text>
              <Text>Mario Lewi</Text>
              </View>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buscador: {
        padding: 15,
      },
      imgprin:{
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 20,
        left:25,
        borderRadius:10,
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
      doc2:{
        flex:1,
      },
})