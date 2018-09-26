import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';

import {ScrollView, Text, View,ImageBackground} from 'react-native';

import Logo from './../slider/Logo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import Icon from 'react-native-ionicons'

class SideMenu extends Component {
  

  render () {
    return (
      <View style={styles.container}>
        
      <View style={styles.headerStyle}>
       <ImageBackground   source={require ('./../assets/images/round.jpg')} style={{width: '100%', height: '100%',paddingTop : 0,alignItems:'flex-start'}}>
       <Icon name='ios-contact' size={70} color="#f57d1e" style={[styles.sectionHeadingStyle,{alignSelf:'center',padding :15}]} />
        <Text style={[styles.sectionHeadingStyle,{alignSelf:'center'}]}>Guest User</Text>
         <Text style={[styles.sectionHeadingStyle,{alignSelf:'center'}]}>Login</Text>
            </ImageBackground>
        
            </View>
     
    

        <ScrollView>
          <View>

          {/* <Icon name="md-add" color = "green"/> */}

         <View style= {styles.combineViewTex}>
         <Icon name='ios-contact' size={25} color="#f57d1e" />
    

            <Text style={styles.sectionHeadingStyle}>
             Profile
            </Text>
            </View>

   <View style= {styles.combineViewTex}>

         <Ionicons name='md-calendar' size={25} color="#f57d1e" />
            <Text style={styles.sectionHeadingStyle}>
            Health Appointment
              </Text>
              </View>
           

              <View style= {styles.combineViewTex}>
              <Ionicons name='ios-business' size={25} color="#f57d1e" />
            <Text style={styles.sectionHeadingStyle}>
             Empanelled Hospital
            </Text>
            </View>

   <View style= {styles.combineViewTex}>
   <Ionicons name='ios-bowtie' size={25} color="#f57d1e" />
            <Text style={styles.sectionHeadingStyle}>
              Language
              </Text>
              </View>
             
              <View style= {styles.combineViewTex}>
              <Ionicons name='ios-alert' size={25} color="#f57d1e" />
              <Text style={styles.sectionHeadingStyle}>
                       About Us
            </Text>
            </View>

   <View style= {styles.combineViewTex}>
   <Ionicons name='md-exit' size={25} color="#f57d1e" />
            <Text style={styles.sectionHeadingStyle}>
           Logout
              </Text>
              </View>
              </View>
           
        </ScrollView>
        {/* <View style={styles.footerContainer}>
      <Logo />
        </View> */}
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;