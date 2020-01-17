import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const Category = props => {
    const {genres, background_image} = props;
    return(
        <ImageBackground style = {styles.wrapper} source ={{ uri: background_image}} >
            <Text style = {styles.genre}>{genres[0]}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        textShadowColor: 'rgba(0, 0, 0, .75)',//Sombras no funcionan en android :(
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        textShadowRadius: 0,

    },
    genre:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',

    },
});
export default Category;