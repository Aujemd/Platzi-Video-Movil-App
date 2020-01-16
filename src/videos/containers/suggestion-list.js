import React, { Component } from 'react';
import {
    FlatList,
    Text
}from 'react-native';

import Layout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import VerticalSeparator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component{

    renderEmpty = () => <Empty text="No hay sugerencias :("/>
    itemSeparator = () => <VerticalSeparator/>
    renderItem = ({item}) => {
        return(<Suggestion {...item}></Suggestion>);
    }

    render(){
        const list = [
           {
                title: 'Avengers Assamble',
                key: '1',
            },
            {
                title: 'Pokemon Showdown',
                key: '2',
            }
        ];
        return(
            <Layout
                title="Recomendado Para ti"
            >
                <FlatList //Lista sencilla
                data={list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.itemSeparator}
                renderItem={this.renderItem}
                >
                </FlatList>
            </Layout>
        );
    }
}

export default SuggestionList;
