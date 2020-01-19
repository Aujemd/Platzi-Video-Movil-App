import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,//Componente que en el overflow de contenido hace scroll
}from 'react-native';

import WebView from 'react-native-webview'; //Componente para ver un pedazo de web html en mi app 


//<iframe width="560" height="315" src="https://www.youtube.com/embed/S3an1Hz88IQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const Details = props => {

    const {title, description_full, medium_cover_image, yt_trailer_code} = props;

    return(
        <ScrollView>
            <View style={styles.top}>
                <Text>{title}</Text>
            </View>
            <View style={styles.bottom}>
                <View style={styles.details}>
                    <Image style={styles.cover} source = {{uri: medium_cover_image}}></Image>
                    <Text style={styles.description}>{description_full}</Text>
                </View>
                <View style={styles.trailer}>
                    <WebView
                    source={{uri: `https://www.youtube.com/embed/${yt_trailer_code}`}}
                    ></WebView>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {},
    trailer: {
      height: 200,
      marginBottom: 10,
    },
    details: {
      flexDirection: "row",
      marginBottom: 20
    },
    cover: {
      width: 125,
      height: 190
    },
    title: {
      color: "#44546b",
      fontSize: 18,
      fontWeight: "bold"
    },
    top: {
      borderBottomWidth: 1,
      borderBottomColor: "#eaeaea",
      padding: 20,
      backgroundColor: "white"
    },
    bottom: {
      padding: 20,
      flex: 1
    },
    description: {
      fontSize: 15,
      lineHeight: 22.5,
      color: "#4c4c4c",
      marginLeft: 10,
      flex: 1
    }
  });

export default Details;