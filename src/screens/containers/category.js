import React, { Component } from 'react';
import {
    FlatList,
    Text
}from 'react-native';

import Layout from '../../videos/components/suggestion-list-layout';
import Empty from '../../videos/components/empty';
import VerticalSeparator from '../../videos/components/vertical-separator';
import Suggestion from '../../videos/components/suggestion';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

function mapStateToProps(state){
    return {
        list: state.videos.categoryList,
    }
}

class Category extends Component{

    static navigationOptions = ({navigation}) => { //Metodo estatico para configurar navigation options donde Agregamos header personalizado a esta screen como en react-navigation 
        return{
            title: navigation.getParam('genre', 'Categoria'),//Poniendo de contenido del Header el titulo de la categoria como una screen de react navigation
        }
    }

    renderEmpty = () => <Empty text="No hay sugerencias :("/>
    itemSeparator = () => <VerticalSeparator/>
    viewMovie = (item) =>{
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: item,
            }
        })
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Movie'
            })
        )
    }
    renderItem = ({item}) => {
        return(<Suggestion 
            {...item}
            onPress = {() => {this.viewMovie(item)}}
        ></Suggestion>);
    }
    keyExtractor = item => item.id.toString();
    
    render(){
        return(
            <Layout
            >
                <FlatList //Lista sencilla
                keyExtractor={this.keyExtractor}
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
                >
                </FlatList>
            </Layout>
        );
    }
}

export default connect(mapStateToProps)(Category);
