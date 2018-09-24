import React from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet, Dimensions, FlatList,Button,Alert } from 'react-native'
import { Actions } from 'react-native-router-flux';



import health1 from './../../assets/images/health1.jpg';
import Swiper from 'react-native-swiper';

const About = () => {

   
    goTohome = () => {
      Actions.home()
      
    }
    let screenWidth = Dimensions.get('window').width;  //width fit screen
    return (

        <View style={{flex:1}}>
            
            {/* <TouchableOpacity onPress = {goTohome}> */}

            <View style={{  alignContent: 'stretch', alignItems: 'center' }} >

                <Image source={health1} style={{ width: screenWidth, height: 200 }} />

            </View>


            <Swiper style={styles.wrapper}  autoplay> 
               

               <View style={styles.slide1}>
                 <Text style={styles.text}>Welcome to Photon App </Text>
                



               </View>



             <View style={styles.slide2}>
                 <Text style={styles.text}>Book appointment</Text>
             </View>



             <View style={styles.slide3}>
                 <Text style={styles.text}>Easy to use </Text>


             </View>




         </Swiper>
           
            {/* </TouchableOpacity> */}
           
                  

         

            <View style={{flex:1,justifyContent:'flex-end' }}>
                <FlatList
                    data={[
                        { key: 'HEALTH CHECK UP' },
                        { key: 'DENTISTRY' },
                        { key: 'CONSULATION' },
                        { key: 'PHARMACY' },

                    ]}
                    renderItem={({ item }) => <Text style={textStyles} onPress = {this.show}>{item.key}</Text>}
                />
              <Button title="Buy Now" onPress = {alert}/> 
            </View>
           
          
            
          
                             
          
                            
        </View>
    )
}
export default About

const textStyles = {
    fontSize: 15,
    fontFamily: 'bold',
    color: '#042e58',
    marginLeft: 2


}
const buttonStyles = {

    width: '100%', 
    height: 50, 
    backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,

    
}

const styles = {
    wrapper: {
       
    },
    slide1: {
        flex:2,
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