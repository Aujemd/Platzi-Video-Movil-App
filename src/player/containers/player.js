import React, { Component } from 'react';
import Video from 'react-native-video';
import { 
    StyleSheet, 
    ActivityIndicator, //Loader de react native
} from 'react-native';
import Layout from '../components/video-layout';

class Player extends Component {

    state = {
        loading: true,
    }

    onLoad = () =>{ //Metodo cuando el video carga quita el loader
        this.setState({
            loading: false,
        })
    }

    render() {
        return(    
            <Layout
            loading={this.state.loading}
            video = {
                <Video 
                source = {{uri: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"}}
                style = {styles.video}
                resizeMode="contain" //Que se reacomode sin desproporcionarse
                onLoad={this.onLoad} ///Metodo para saber cuando el video ya esta cargado
                />
            }
            loader = {
                <ActivityIndicator color = "red"></ActivityIndicator>
            }
            >
            </Layout>
         );
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
});

export default Player;