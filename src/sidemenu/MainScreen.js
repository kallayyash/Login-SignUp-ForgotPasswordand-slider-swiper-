import React from 'react';
import { ListView, Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { Constants } from 'expo';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello Chat app!</Text>
        <Button
          onPress={() => navigate('Chat', {'user': 'Lucy'})}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${ navigation.state.params.user }`,
  });
  render() {
    const { params } = this.props.navigation.state; 
    return (
      <View>
        <Text>Chat with { params.user }</Text>
      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of recent chat.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {'user': 'Jane'})}
          title="Chat with Jane"
        />
      </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>List of all contact.</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', {'user': 'Lucy'})}
          title="Chat with Lucy"
        />
      </View>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
})

const SimpleApp = StackNavigator({
  Home: { 
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
  },
  Chat: { screen: ChatScreen },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SimpleApp style={{ width: Dimensions.get("window").width }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    paddingTop : 0
  }
})