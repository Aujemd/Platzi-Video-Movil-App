import React, { Component } from 'react';
import {
    Text,
}from 'react-native';
import {connect} from 'react-redux';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import API from '../utils/api';
import Movie from './screens/containers/movie';



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
        if(this.props.selectedMovie){
            return <Movie/>
        }
        return(
            <Home>
            <Header>
            </Header>
            <Text>Buscador</Text>
            <CategoryList></CategoryList>
            <SuggestionList></SuggestionList>
          </Home>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie,
    }
}
export default connect(mapStateToProps)(AppLayout);