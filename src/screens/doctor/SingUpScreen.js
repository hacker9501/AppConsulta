import React,{useState} from "react";
import { View,StyleSheet} from "react-native";
import { Picker } from "react-native";
import { Title,IconButton } from 'react-native-paper';
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";

const SingUpScreen =({navigation})=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [contpassword,setcontPassword]=useState("")
    const [selectedValue, setSelectedValue] = useState("Profesion");
const onHandleSingup =()=>{
  
    console.log("")
}    

    return(
        <View style={styles.container}>
            <Title style={styles.titleText}>App Medical</Title>
            <Title style={styles.titleText}>Doctor</Title>
            <FormInput 
            labelName="Nombre"
            value={name}
            onChangeText={userName => setName(userName)}

            />
            <FormInput 
            labelName="Email"
            value={email}
            onChangeText={userEmail => setEmail(userEmail)}

            />
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 255 }}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Profesion" value="profesion" />
            <Picker.Item label="Psicologo" value="psicologo" />
            <Picker.Item label="Fisioterapeuta" value="fisioterapeuta" />
            </Picker>

            <FormInput 
            labelName="Password"
            value={password}
            onChangeText={userPassword => setPassword(userPassword)}

            />
            <FormInput 
            labelName="Confirmar Password"
            value={contpassword}
            onChangeText={usercontPassword => setcontPassword(usercontPassword)}

            />
            <FormButton 
            title="Sing Up"
            modeValue="contained"
            onPress={onHandleSingup}
            labelStyle={styles.loginButtonLabel}
            />
            <IconButton
            icon='keyboard-backspace'
            size={30}
            style={styles.navButton}
            color='#6646ee'
            onPress={()=>navigation.goBack()}
            />
        </View>

    )
}

export default SingUpScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      color: "#000",
      fontSize: 24,
      marginBottom: 10
    },
    loginButtonLabel: {
      fontSize: 22
    },
    navButtonText: {
      fontSize: 16
    }
  });