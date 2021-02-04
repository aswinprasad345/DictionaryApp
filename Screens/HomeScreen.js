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
    getWord=(word)=>{
        var searchKeyword = word.toLowerCase();
        var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"

        return fetch(url)
        .then((data)=>{
            if(data.status === 200){
                return data.json();
            }else{
                return null;
            }
        })
        .then((response)=>{
            var responseObject = response;
            if(responseObject){
                var wordData = responseObject.definitions[0]
                var definition = wordData.description
                var lexicalCategories = wordData.wordType

                this.setState({
                    word : this.state.text,
                    defination : definition,
                    lexicalCategory : lexicalCategories
                })
            }else{
                this.setState({
                    word : this.state.text,
                    definition : "Not Found",
                })
            }
        })
    }
    render(){
        return(
            <View style = {styles.container}>
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
                    style = {styles.searchButton} 
                    onPress = {(()=>{
                        this.setState({ isSearchPressed : true })
                        this.getWord(this.state.text);
                    })}>
                    <Text>Search</Text>
                </TouchableOpacity>
                    <Text style = {styles.title}>Word : {""}</Text>
                    <Text style = {{ fontSize : 18 , marginTop : -30 , marginLeft : 150}}>{this.state.word}</Text>
                    <Text style = {styles.title}>Type : {""}</Text>
                    <Text style = {{ fontSize : 18 , marginleft : -10 }}>{this.state.lexicalCategory}</Text>
                    <Text style = {styles.title}>Definition : {""}</Text>
                    <Text style = {{ fontSize : 18 , marginLeft : 30 }}>{this.state.defination}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    },
    title:{
        color: 'black',
        marginTop: 20,
        marginLeft: 30,
        fontSize : 30
    },
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
        height:40, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
            },
        marginLeft : 45,
        marginTop : 10    
        }        
})