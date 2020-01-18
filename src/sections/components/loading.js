import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator,
}from 'react-native';

const Loading = props => {
    return(
        <View style={styles.container}>
            <Image 
                source = {require('../../../assets/logo.png')}
                style={styles.logo}
            >
            </Image>
            <ActivityIndicator></ActivityIndicator> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, //tener todo el alto y todo el ancho disponible en esa pantalla
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    }
});

export default Loading;