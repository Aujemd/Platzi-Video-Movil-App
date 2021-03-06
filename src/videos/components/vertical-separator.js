import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const VerticalSeparator = props => {
    return (
        <View style = {
            
            [
            styles.separator,
            {
                borderTopColor: (props.color) ? props.color : '#eaeaea', //Asignación dinamica de estilos
            }
            ]
        }>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    },
});

export default VerticalSeparator;