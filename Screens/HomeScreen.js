import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            text: "",
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
                <Header centerComponent={{ text : "DICTIONARYAPP" , style: { color : '#fff' } }} />
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
                <TouchableOpacity 
                    styles = {styles.searchButton} 
                    onPress={(()=>{
                        
                    })}>
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, 
        padding:10, 
    },
    searchButton:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
            },
        }        
})