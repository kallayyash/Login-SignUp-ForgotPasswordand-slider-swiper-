import React from 'react'
import {
    Text,
    View, Button, TouchableOpacity, Image
} from 'react-native';

import Swiper from 'react-native-swiper';

import { Actions } from 'react-native-router-flux';
import health1 from './../assets/images/welezo1.jpg';
import health2 from './../assets/images/welezo2.jpg';
import health3 from './../assets/images/welezo3.jpg';
import health4 from './../assets/images/mobile1.jpg';

import health5 from './../assets/images/mobile2.png';
import health6 from './../assets/images/mobile3.jpg';
import health7 from './../assets/images/mobile4.jpg';

const Swipers = () => {




    return (
        <View style={{ flex: 1 }}>

            <Swiper style={styles.wrapper} autoplay>


                <View style={styles.slide1}>
                   

                      <Image source={health4} style={{ width: "100%", height: "100%" }} />


                </View>



                <View style={styles.slide2}>
                   
                    <Image source={health5} style={{ width: "100%", height: "100%" }} />
                </View>



                <View style={styles.slide3}>
                    
                    <Image source={health6} style={{ width: "100%", height: "100%" }} />

                </View>




            </Swiper>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button title="Register" color="#222" backgroundColor="#f57d1e"   onPress={() => Actions.register()} />

                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button title="Login" color="#222" onPress={() => Actions.login()} />

                </View>


                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <Button title="Skip" color="#222" onPress={() => Actions.stackNav()} />

                </View>

            </View>



        </View>

   

        
    )
}

export default Swipers

const styles = {
    wrapper: {

    },
    slide1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slides: {
        flex: 1,
        borderColor: 'white',
        borderRadius: 4,
        borderBottomColor: 'white',
        justifyContent: 'space-around'


    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

}