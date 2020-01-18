import React from 'react'
import {
    View,
    TouchableHighlight, //Mientras presionas este boton haces un highlight de cualquier color
    TouchableOpacity, //Cuando presionas este componente realiza un destello
    TouchableWithoutFeedback, //No hace nada xD
    Text,
    StyleSheet,
}from 'react-native';

const PlayPause = props => {

    const {onPress, paused} = props;

    return(
        <TouchableHighlight
        onPress = {onPress} //Evento que hara el boton
        style = {styles.container}
        underlayColor="red"//Colo al que va a cambiar cuando se presione
        hitSlop={{ //Propiedad que le agrega un poco más de rango al botom para dedos grandes
            left: 5,
            top: 5,
            bottom: 5,
            right: 5,
        }}
        >
        {
            paused ? <Text style={styles.button}>Play</Text> : <Text style={styles.button}>Pause</Text>
        }
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button:  {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container:  {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    },
});
export default PlayPause;