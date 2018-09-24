import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import health from './../../assets/images/health.jpg';
import health1 from './../../assets/images/health1.jpg';
import health2 from './../../assets/images/health2.jpg';
import health3 from './../../assets/images/health3.jpg';
import health4 from './../../assets/images/health4.jpg';
import health5 from './../../assets/images/health5.jpg';

class Data extends Component {

    render() {
        let screenWidth = Dimensions.get('window').width;  //width fit screen
        return (
          
           
            <ScrollView>
                <Text style = {{textAlign:'center',color:'#f57d1e',fontSize : 20,fontFamily:'bold',marginTop: 3}}>Health Packages</Text>
                <View style={{ flex: 1, flexDirection: 'row',justifyContent:'space-between', marginBottom: 10 }} >
                    <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative', flex: 1,left : 25  }} resizeMode = "contain">
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



                    <ImageBackground source={health5} style={{ width: 150, height: 150, position: 'relative',flex: 1  }}  resizeMode = "contain">
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
               

                <View style={{ flex: 1, flexDirection: 'row' ,justifyContent:'space-between', marginBottom: 10}}>
                    <ImageBackground source={health2} style={{ width: 150, height: 150,  position: 'relative',flex: 1,left : 25  }} resizeMode = "contain" >

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
                    <ImageBackground source={health2} style={{ width: 150, height: 150, position: 'relative' ,flex: 1 }}  resizeMode = "contain">
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
                    <ImageBackground source={health5} style={{ width: 150, height: 150,  position: 'relative' ,flex: 1,left : 25 }}   resizeMode = "contain">


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
                    <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative',flex: 1  }}  resizeMode = "contain" >

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

                <View style={{ flex: 1, flexDirection: 'row',justifyContent:'space-between', marginBottom: 10 }} >
                    <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative', flex: 1,left : 25  }} resizeMode = "contain">
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



                    <ImageBackground source={health5} style={{ width: 150, height: 150, position: 'relative',flex: 1  }}  resizeMode = "contain">
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
               

                <View style={{ flex: 1, flexDirection: 'row' ,justifyContent:'space-between', marginBottom: 10}}>
                    <ImageBackground source={health2} style={{ width: 150, height: 150,  position: 'relative',flex: 1,left : 25  }} resizeMode = "contain" >

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
                    <ImageBackground source={health2} style={{ width: 150, height: 150, position: 'relative' ,flex: 1 }}  resizeMode = "contain">
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
                    <ImageBackground source={health5} style={{ width: 150, height: 150,  position: 'relative' ,flex: 1,left : 25 }}   resizeMode = "contain">


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
                    <ImageBackground source={health1} style={{ width: 150, height: 150, position: 'relative',flex: 1  }}  resizeMode = "contain" >

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


        )
    }
}

export default Data