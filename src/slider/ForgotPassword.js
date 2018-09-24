import React, { Component } from 'react';
import {
    Text,
    View, StyleSheet, TouchableOpacity, Image, TextInput, StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';

class ForgotPassword extends Component {
   
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
                    <TextInput placeholder="Email Id" style={styles.textDesign}
                        keyboardType='email-address' placeholderTextColor='gray' />

                 
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => {
                            alert("Email Sent Successfully");
                            Actions.home()
                        }}>Send Email</Text>
                    </TouchableOpacity>

                </View>

                
              


            </View>
            
        )
    }
}

export default ForgotPassword
const styles = {
container: {
    flexGrow: 1,
    backgroundColor: '#302c2d',
    justifyContent: 'center',
    alignItems: 'center'

},
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
buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
},
button: {
    width: 300,
    backgroundColor: '#f26522',
    borderRadius: 25,
    marginVertical: 10, //for spacing b/n pass and button 
    paddingVertical: 13  //button size
},
}