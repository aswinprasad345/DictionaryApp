import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <Header centerComponent={{ text : "DICTIONARYAPP" , style: { color : '#fff'} }} />
            </View>
        )
    }
}