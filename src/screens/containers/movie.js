import React, { Component } from 'react'
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import {connect} from 'react-redux';
import Details from '../../videos/components/details';
import {
    Animated //Componente para animar
} from 'react-native';
class Movie extends Component {
    state = {
        opacity: new Animated.Value(0),//instancia del valor que quiero cambiar en este caso instancio que el valor que voy a cambiar es la opacidad
    }

    static navigationOptions = ({navigation}) => {
        return {
            header:() => {
                return (
                    <Header>
                    <Close
                    onPress = {() => {navigation.goBack()}}
                    />
                    </Header>
                );
            } 
        }
    }
    closeVideo = () =>{
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload:{
                movie: null,
            }
        })
    }

    componentDidMount(){
        Animated.timing( //Función que cambia la opacidad
            this.state.opacity,
            {
                toValue: 1,//Quiero llegar al valor 1
                duration: 1000,// en un segundo
            }
        ).start(); //Comienza
    }
    render() {
        return (
            <Animated.View
            style = {{
                flex: 1,
                opacity: this.state.opacity,
            }}
            >
            <MovieLayout>
            <Player></Player>
            <Details {...this.props.movie}></Details>
            </MovieLayout>
            </Animated.View>

        )
    }
}

function mapStateTuProps(state){
    return{
        movie: state.videos.selectedMovie
    }
}

export default connect(mapStateTuProps)(Movie);
