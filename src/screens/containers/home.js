import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list';
import API from '../../../utils/api';
import Search from '../../sections/containers/search';
import {StatusBar} from 'react-native';

class Home extends Component{

    static navigationOptions = () => { //Metodo estatico para configurar navigation options donde Agregamos header personalizado a esta screen como en react-navigation 
        return{
            header: Header,
        }
    }


    async componentDidMount(){
        this.focus = this.props.navigation.addListener('didFocus', () => {
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('white'); //Ojo solo para android porque en IOS no tiene color el status bar
    });
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

      componentWillUnmount(){
        this.focus.remove(); //Para evitar problemas de memoria
    }

    render(){
  
        return(
            <Fragment>
            <Search />
            <CategoryList></CategoryList>
            <SuggestionList></SuggestionList>
          </Fragment>
        );
    }
}


export default connect(null)(Home);