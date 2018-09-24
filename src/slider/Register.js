import React, { Component } from 'react';
import {
    Text,TextInput,
    View, Button, TouchableOpacity,Image,DatePickerAndroid,TouchableWithoutFeedback,StatusBar
} from 'react-native';

import Logo from './Logo';

import { Actions } from 'react-native-router-flux';

class Register extends Component {
   
    state = {
      presetDate: new Date(2018, 10, 10),
      simpleDate: new Date(2020, 4, 5),
      spinnerDate: new Date(2020, 4, 5),
      calendarDate: new Date(2020, 4, 5),
      defaultDate: new Date(2018, 10, 10),
      allDate: new Date(2018, 10, 10),
      simpleText: 'pick a date',
      spinnerText: 'pick a date',
      calendarText: 'pick a date',
      defaultText: 'pick a date',
      minText: 'pick a date, no earlier than today',
      maxText: 'pick a date, no later than today',
      presetText: 'pick a date, preset to 2020/5/5',
      allText: 'pick a date between 2020/5/1 and 2020/5/10',
    };
  
    showPicker = async (stateKey, options) => {
      try {
        var newState = {};
        const {action, year, month, day} = await DatePickerAndroid.open(options);
        if (action === DatePickerAndroid.dismissedAction) {
          newState[stateKey + 'Text'] = 'dismissed';
        } else {
          var date = new Date(year, month, day);
          newState[stateKey + 'Text'] = date.toLocaleDateString();
          newState[stateKey + 'Date'] = date;
        }
        this.setState(newState);
      } catch ({code, message}) {
        console.warn(`Error in example '${stateKey}': `, message);
      }
    };

    render(){
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
            <TextInput placeholder="Mobile Number" style={styles.textDesign}
               placeholderTextColor='gray' />

            <TextInput placeholder="Full name" style={styles.textDesign}
                placeholderTextColor='gray'  />

            <TextInput placeholder="Email Id " style={styles.textDesign}
                keyboardType='email-address' placeholderTextColor='gray' />

            <TextInput placeholder="Password" style={styles.textDesign}
                placeholderTextColor='gray' secureTextEntry={true} />

                 <TextInput placeholder="Date of Birth" style={styles.textDesign}
                placeholderTextColor='gray'   onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}/>
</View>
                 {/* <TouchableWithoutFeedback
            onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
            <View>
              <Text style={styles.text}>{this.state.simpleText}</Text>
            </View>
          </TouchableWithoutFeedback> */}
     
     <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => {
                            alert("Register Successfully");
                            Actions.home()
                        }}>Register</Text>
                    </TouchableOpacity>

                </View>

 <View style={styles.signUp}>
               <Text style= {[styles.logoText,alignItems='center']}>Already have account ?  </Text>
                <Text style = {styles.signUpText}  onPress = {() => Actions.login()}>Sign In</Text>
              </View>
        
    </View>
        )
    }
}

export default Register


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

/* const styles = {
textDesign : {
    height: 35, borderColor: 'gray', margin: 10, borderWidth: 1, padding: 10, 
}
} */