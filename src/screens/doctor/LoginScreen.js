import {useState} from "react";
import { View,StyleSheet } from "react-native";
import { Title } from 'react-native-paper';
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";

const LoginScreen =({navigation})=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const onHandleLogin =()=>{
    console.log(email,password)
}
    return(
        <View style={styles.container}>
            <Title style={styles.titleText}>App Medical</Title>
            <Title style={styles.titleText}>Doctor</Title>
            <FormInput 
            labelName="Email"
            value={email}
            onChangeText={userEmail => setEmail(userEmail)}

            />
            <FormInput 
            labelName="Password"
            value={password}
            onChangeText={userPassword => setPassword(userPassword)}

            />
            <FormButton 
            title="Logindoc"
            modeValue="contained"
            onPress={onHandleLogin}
            labelStyle={styles.loginButtonLabel}
            />
            <FormButton
            title="¿Eres Nuevo? Sign up"
            modeValue="text"
            uppercase={false}
            labelStyle={styles.navButtonText}
            onPress={()=>navigation.navigate('Signupdoc')}
            />
        </View>
    )
}

export default LoginScreen;

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
      fontSize: 14
    }
  });