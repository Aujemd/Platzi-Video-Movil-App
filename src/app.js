import React, { Component } from 'react';
import {
    Text,
}from 'react-native';
import {connect} from 'react-redux';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Player from './player/containers/player';
import API from '../utils/api';



class AppLayout extends Component{

    async componentDidMount(){
   
        const suggestionList = await API.getSuggestion(10);
    
        this.props.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: { //Datos de la acción
            suggestionList,
          }
        });
    
        const categoryList = await API.getMovies();
       
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: { //Datos de la acción
            categoryList,
          }
        });
      }

    render(){
        return(
            <Home>
            <Header>
            </Header>
            <Player></Player>
            <Text>Buscador</Text>
            <CategoryList></CategoryList>
            <SuggestionList></SuggestionList>
          </Home>
        );
    }
}

export default connect(null)(AppLayout);