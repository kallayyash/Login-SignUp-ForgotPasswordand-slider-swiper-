import React, { Component } from 'react';
import {
    Text,
    View, Button, TouchableOpacity, Image, TextInput, StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';


class Login extends Component {
    render() {
        return (
            <View style={styles.container}>

                <StatusBar
                    backgroundColor="#222"
                    barStyle="light-content"
                />
                <View style={{ flex: 1 }}>
                    <Logo />
                </View>

                <View>
                    <TextInput placeholder="Email Id or Mobile Number" style={styles.textDesign}
                        keyboardType='email-address' placeholderTextColor='gray' />

                    <TextInput placeholder="Password" style={styles.textDesign}
                        placeholderTextColor='gray' secureTextEntry={true} />
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => {
                            alert("Login Successfully");
                            Actions.stackNav()
                        }}>Log In</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.signUp}>
               <Text style= {[styles.logoText,alignItems='center']}>Dont't have an account ?  </Text>
                <Text style = {styles.signUpText}  onPress = {() => Actions.register()}>Sign Up</Text>
              </View>
              <View style = {{flex:1}}>
               <Text style= {[styles.logoText,alignItems='center']} onPress = {() => Actions.forgotpassword()}>Forgot Password ?</Text>
               </View>
              


            </View>
        )
    }
}

export default Login

const styles = {
    container: {
        flexGrow: 1,
        backgroundColor: '#302c2d',
        justifyContent: 'center',
        alignItems: 'center'

    }
    ,
    textDesign: {

        width: 300,
        borderColor: 'gray',
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        color: 'white',
        paddingHorizontal: 16,  //textinput inside leave space 
        fontSize: 16,
    },
    button: {
        width: 300,
        backgroundColor: '#f26522',
        borderRadius: 25,
        marginVertical: 10, //for spacing b/n pass and button 
        paddingVertical: 13  //button size
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
    logoText : {
        marginVertical: 15,
        fontSize:10,
        color:'rgba(255, 255, 255, 0.7)',
        
      
    },
    signUp:{
        
         justifyContent:'flex-start',
         alignItems:'center',
         flexDirection : 'row',
       

    },
    signUpText: {
        fontSize: 10,
               color: '#f57d1e',
       
    },
}