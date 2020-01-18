import React, {Component} from 'react';

import{
  Text,
}from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import API from './utils/api';
import CategoryList from './src/videos/containers/category-list';
import Player from './src/player/containers/player';
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {

  state = {
    suggestionList: [],
    categories: [],
  }

  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categories: categories,
    });
  }

  render(){
    return(
      <Provider
        store = {
          store
        }
      >
      <Home>
        <Header>
        </Header>
        <Player></Player>
        <Text>Buscador</Text>
        <CategoryList list= {this.state.categories}></CategoryList>
        <SuggestionList list= {this.state.suggestionList}></SuggestionList>
      </Home>
      </Provider>
    );
  }
}

//METERLE REDUX
// npm install redux react-redux --save