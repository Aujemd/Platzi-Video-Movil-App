import React, { Component } from 'react'
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';

export default class Movie extends Component {
    render() {
        return (
            <MovieLayout>
            <Header></Header>
            <Player></Player>
            </MovieLayout>
        )
    }
}
