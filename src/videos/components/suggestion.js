import React from 'react'
import {View, Image, Text, StyleSheet} from 'react-native';
const Suggestion = props => {

    const {title, medium_cover_image, year, rating, genres} = props;
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.cover} source={
                    {
                        uri: medium_cover_image,
                    }
                    }></Image>
                <View style={styles.genderContainer}>
                <Text style={styles.genderText}>{genres[0]}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.year}>{year}</Text>
                <Text style={styles.rating}>{rating} Estrellas</Text>
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