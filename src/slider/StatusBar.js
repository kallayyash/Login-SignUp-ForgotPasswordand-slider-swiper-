import React, { Component } from 'react';
import {StatusBar} from 'react-native';


class StatusBars  extends Component {
  
    render() {
        return (
            <View>
                <StatusBar
      backgroundColor="#6200EE"
      barStyle="light-content"
       />
                </View>
        )
    }
}

export default StatusBars