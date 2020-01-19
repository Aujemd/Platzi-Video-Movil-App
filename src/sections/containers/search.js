import React, { Component } from 'react';

import {
    TextInput,
    StyleSheet,
}from 'react-native';

class Search extends Component{

    state = {
        text: '',
    }
    handleSubmit = () => {
        console.log(this.state.text);
    }

    handleChangedText = text =>{
        this.setState({
            text
        });
    }
    render(){
        return(
        <TextInput 
        placeholder = "Escribe tu pelicula favorita ..." 
        underlineColorAndroid = "green"
        autoCapitalize = "none"
        onSubmitEditing = {this.handleSubmit}
        onChangeText = {this.handleChangedText}
        style = {styles.input}
        >
            
        </TextInput>
        );
    }
}

const styles = StyleSheet.create({
    input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaea'
    }
  })
  
export default Search;