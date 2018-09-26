import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, Image, ScrollView, ImageBackground, TouchableOpacity,
  View, TouchableHighlight, DrawerLayoutAndroid
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SideMenu from './SideMenu';
import App from './MainScreen';
import Data from './../components/data/Data';

import health from './../assets/images/health.jpg';
import health1 from './../assets/images/health1.jpg';
import health2 from './../assets/images/health2.jpg';
import health3 from './../assets/images/health3.jpg';
import health4 from './../assets/images/health4.jpg';
import health5 from './../assets/images/health5.jpg';
import { Actions } from 'react-native-router-flux';

class StackNav extends Component {


  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {

    this.drawer.openDrawer();
  }

  render() {
    return (

      <DrawerLayoutAndroid
        drawerWidth={250}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideMenu />}>

        <View style={{ flex: 1 }}>
          
          <View style={{ flex: 1, alignItems: 'flex-start', backgroundColor: '#f57d1e',flexDirection :'row'}}>
            <TouchableOpacity onPress={this.openDrawer}>

              <Ionicons name='ios-menu' size={35} color="white" style={{paddingHorizontal : 10}}/>
            </TouchableOpacity>
            {/* <Text>{'Photon '}</Text> */}
            {/* <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'bold', marginTop: 3 }}>Photon</Text> */}
          </View>


          <View style={{ flex: 14 }}>
            <ScrollView >

              <Text style={{ textAlign: 'center', color: '#f57d1e', fontSize: 20, fontFamily: 'bold', marginTop: 3 }}>Health Packages</Text>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }} >
                <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative', flex: 1, left: 25 }} resizeMode="contain">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10,

                    }}
                  >
                    Basic- Rs.1999
  </Text>

                </ImageBackground>



                <ImageBackground source={health5} style={{ width: 150, height: 150, position: 'relative', flex: 1 }} resizeMode="contain">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Regular- Rs.2999
  </Text>
                </ImageBackground>

              </View>


              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <ImageBackground source={health2} style={{ width: 150, height: 150, position: 'relative', flex: 1, left: 25 }} resizeMode="contain" >

                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Economy- Rs.3999
  </Text>
                </ImageBackground>
                <ImageBackground source={health2} style={{ width: 150, height: 150, position: 'relative', flex: 1 }} resizeMode="contain">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Premium- Rs.5999
  </Text>
                </ImageBackground>
              </View>



              <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground source={health5} style={{ width: 150, height: 150, position: 'relative', flex: 1, left: 25 }} resizeMode="contain">


                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Platinum- Rs.6999
  </Text>
                </ImageBackground>
                <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative', flex: 1 }} resizeMode="contain" >

                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Supreme- Rs.7999
  </Text>
                </ImageBackground>

              </View>

              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }} >
                <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative', flex: 1, left: 25 }} resizeMode="contain">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10,

                    }}
                  >
                    Basic- Rs.1999
  </Text>

                </ImageBackground>



                <ImageBackground source={health5} style={{ width: 150, height: 150, position: 'relative', flex: 1 }} resizeMode="contain">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Regular- Rs.2999
  </Text>
                </ImageBackground>

              </View>


              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <ImageBackground source={health2} style={{ width: 150, height: 150, position: 'relative', flex: 1, left: 25 }} resizeMode="contain" >

                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Economy- Rs.3999
  </Text>
                </ImageBackground>
                <ImageBackground source={health2} style={{ width: 150, height: 150, position: 'relative', flex: 1 }} resizeMode="contain">
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Premium- Rs.5999
  </Text>
                </ImageBackground>
              </View>



              <View style={{ flex: 1, flexDirection: 'row' }}>
                <ImageBackground source={health5} style={{ width: 150, height: 150, position: 'relative', flex: 1, left: 25 }} resizeMode="contain">


                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Platinum- Rs.6999
  </Text>
                </ImageBackground>
                <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative', flex: 1 }} resizeMode="contain" >

                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      position: 'absolute', // child
                      bottom: 0, // position where you want
                      textAlign: 'center',
                      left: 10
                    }}
                  >
                    Supreme- Rs.7999
  </Text>
                </ImageBackground>

              </View>

            </ScrollView>
          </View>

        </View>

      </DrawerLayoutAndroid>


    );
  }
}


export default StackNav;

const styles = StyleSheet.create({
  ImageAlign: {
    width: 30,
    height: 30,
    marginRight: 0,
    paddingRight: 0

  }
})