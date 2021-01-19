import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            text: text,
            isSearchPressed:false,
            word: "",
            lexicalCategory : "",
            examples : [],
            defination : "",
        }
    }
    render(){
        return(
            <View>
                <Header centerComponent={{ text : "DICTIONARYAPP" , style: { color : '#fff'} }} />
                <TextInput 
                style={styles.inputBox} 
                onChangeText={text => {
                    this.setState({
                        text: text,
                        isSearchPressed:false,
                        word: "Loading...",
                        lexicalCategory : "",
                        examples : [],
                        defination : "",
                    })
                }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width: '80%',
        alignSelf: 'center',
        height:40,
    }
})