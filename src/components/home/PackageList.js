import React, { Component } from 'react';
import {Text,View,Button ,TouchableOpacity,TextInput,WebView,TouchableHighlight,TouchableNativeFeedback ,Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PackageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
      }

  
    render() {
        return (
            <View style = {{backgroundColor : 'pink',flex:1,justifyContent : 'center',alignItems:'center'}} >
                            
                             <TouchableOpacity  accessible = {true} accessibilityLabel = "Press" accessibilityHint="Navigates to the previous screen">
                             <Text>View</Text>
                             </TouchableOpacity>   


                             
                               <TouchableHighlight underlayColor = 'red' onPress = {() =>{}}   style={{ backgroundColor: 'green' }} activeOpacity={0.95}  delayPressIn={100}> 
                                        <View>
                                        <Text>This is TouchableHighlight</Text>
                                        </View>
                                        
                              </TouchableHighlight>
                              <View style = {{border : 1,borderColor:'gray'}}> 
                                  <Text> Enter User name :</Text>
                                  {/* <TextInput placeholder ="Am a text" autoCapitalize = 'characters'  multiline = {true} style = {{borderRadius : 25,
                                    backgroundColor:'gray',paddingHorizontal:15,}} underlineColorAndroid = "red" autoFocus={true}  inlineImageLeft='search_icon' keyboardAppearance="dark" 
                                    keyboardType="name-phone-pad" selectTextOnFocus={true}/> */}
                              </View>


                              <View style={[{  margin: 20,alignSelf: 'stretch' }]}>
   <Button
      onPress={alert}
      title="Button Three"
      color="black" accessibilityLabel = "yes"
      
    />
</View>

<View>
    <Image source = { require('./../../assets/images/health3.jpg')} style = {{borderRadius : 30 , opacity : 30,resizeMode : 'stretch',borderWidth : 3, backgroundColor:'red'}} />
</View> 
<View >
    <Image source = 
    {{uri : 'https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2017/11/06144017/Dummy-School-Advantages-Disadvantages-770x385.png' }} style={{height : 100,width:100}} />
</View>
<Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />


                  
                    </View>
        )
    }
}

export default PackageList