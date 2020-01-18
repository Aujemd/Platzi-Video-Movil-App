import React, { Component } from 'react';
import Video from 'react-native-video';
import { 
    StyleSheet, 
    ActivityIndicator, //Loader de react native
    Text,
} from 'react-native';
import Layout from '../components/video-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component { //Smart Component

    state = {
        loading: true,
        paused: false,
    }

    onLoad = () =>{ //Metodo cuando el video carga quita el loader
        this.setState({
            loading: false,
        })
    }

    playPause = () => { //Evento que hara el boton
        this.setState({
            paused: !this.state.paused,
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
                paused={this.state.paused}
                />
            }
            loader = {
                <ActivityIndicator color = "red"></ActivityIndicator>
            }

            controls = {
                <ControlLayout>
                    <PlayPause
                        onPress = {
                            this.playPause //Evento que hara el boton
                        }
                        paused = {this.state.paused}
                    ></PlayPause>
                    <Text>Progress bar</Text>
                    <Text>Time Left</Text>
                    <Text>Fullscreen</Text>
                </ControlLayout>
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