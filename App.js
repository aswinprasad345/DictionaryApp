import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen.js';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
})

const AppContainer = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
