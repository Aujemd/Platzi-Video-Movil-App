import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';
const Suggestion = () => {
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.cover} source={require("../../../assets/logo.png")}></Image>
                <View style={styles.genderContainer}>
                    <Text style={styles.genderText}>Acción</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>Avengers</Text>
                <Text style={styles.year}>2012</Text>
                <Text style={styles.rating}>Mis Dieces</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    genderContainer:{
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    genderText:{
        color: 'white',
        fontSize: 11,
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain',
    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    title:{
        fontSize: 18,
        color: '#44546b',
    },
    year:{
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    }

});
export default Suggestion;