import React from 'react'
import { TouchableOpacity, View ,DrawerLayoutAndroid, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MarqueeText from 'react-native-marquee';
import Data from './../data/Data';



const Home = () => {
  const goToAbout = () => {
     Actions.about()
  }
  return (
   <View style={styles.container}>
         <Data />
   </View>
  )
}
export default Home;


const styles = StyleSheet.create({
  container: {
      flex: 1,

  }
})