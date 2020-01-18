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
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

export default class App extends Component {

  state = {

  }

  async componentDidMount(){
   
    /*const suggestionList = await API.getSuggestion(10);

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: { //Datos de la acción
        suggestionList,
      }
    });

    const categoryList = await API.getMovies();
   
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: { //Datos de la acción
        categoryList,
      }
    });
   */
  }

  render(){
    return(
      <Provider
        store = {
          store
        }
      >
        <PersistGate
          loading={<Text>Cargando ...</Text>}
          persistor={persistor}
        >
        <Home>
        <Header>
        </Header>
        <Player></Player>
        <Text>Buscador</Text>
        <CategoryList></CategoryList>
        <SuggestionList></SuggestionList>
      </Home>
        </PersistGate>
      </Provider>
    );
  }
}

//npm install --save redux-persist
// npm i @react-native-community/async-storage