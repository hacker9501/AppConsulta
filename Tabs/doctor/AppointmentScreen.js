import React from 'react';
import { FlatList, View,Text,StyleSheet,Image,SafeAreaView} from 'react-native';
import { Searchbar } from 'react-native-paper';
import FormButton from '../../src/components/FormButton';

export default function ChatScreen()  {
  const pacientes=[
    {
    id: 1,
    name: 'Gloria Borger1 \nThank you for the answer!!!',
    image: require('../../assets/doc1.jpg'),
    },
    {
      id: 2,
      name: 'Gloria Borger2 \nThank you for the answer!!!',
      image: require('../../assets/doct2.jpg'),
    },
    
    {
      id: 3,
      name: 'Gloria Borger3 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    {
      id: 4,
      name: 'Gloria Borger4 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    {
      id: 5,
      name: 'Gloria Borger5 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    {
      id: 6,
      name: 'Gloria Borger6 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    {
      id: 7,
      name: 'Gloria Borger7 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    {
      id: 8,
      name: 'Gloria Borger8 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    {
      id: 9,
      name: 'Gloria Borger9 \nThank you for the answer!!!',
      image: require('../../assets/doc3.jpg'),
    },
    
  ];

  const onepaciente = ( {item} ) => (
    <View style={styles.item}>
      <View style={styles.avatarCont}>
        <Image loadingIndicatorSource={item.image} style={styles.avatar}/>
      </View>
    <Text style={styles.name}>{item.name}</Text>
    </View>
  ),

  /*headerComponent = () =>{
    return <Text style={styles.header}>Pacientes Registrados</Text>
  }
*/
  itemSeparator = () => {
    return <View style={styles.separator}/>
  };

  return (
    <SafeAreaView>
      <View style={styles.btn}>
        <FormButton title="Agregar Citas"/>
        <FormButton title="Calendario"/>
      </View>
      <Text style={styles.pacient}>Citas de Hoy</Text>
      <FlatList
        /*ListHeaderComponent={headerComponent}*/
        data = {pacientes}
        renderItem = {onepaciente}
        ItemSeparatorComponent = {itemSeparator}      
      />
    </SafeAreaView>

     );
}

const styles=StyleSheet.create({
  separator:{
    height:1,
    width:'100%',
    backgroundColor:'#CCC',
  },
  header:{
    height:'55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pacient:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    paddingVertical: '13px',
  },
  avatarCont:{
    backgroundColor:'#D9D9D9',
    borderRadius:5,
    height:89,
    width:89,
    justifyContent: 'center',
    alignItems: 'center',
    left:10,
  },
  avatar:{
    height:55,
    width:55,
  },
  name:{
    fontWeight: '600',
    fontSize:16,
    marginLeft:18,
  },
  btn:{
    flex:1,
    flexDirection: 'row',
    marginBottom:18,
  },
  pacient:{
    left:10,
  },

});


