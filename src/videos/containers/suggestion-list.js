import React, { Component } from 'react';
import {
    FlatList,
    Text
}from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import VerticalSeparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';

function mapStateToProps(state){
    return {
        list: state.videos.suggestionList,
    }
}

class SuggestionList extends Component{

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
                title="Recomendado Para ti"
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

export default connect(mapStateToProps)(SuggestionList);
