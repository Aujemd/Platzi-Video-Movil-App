import React, { Component } from 'react';
import {
    FlatList,
    Text
}from 'react-native';

import Layout from '../components/suggestion-list-layout';

class SuggestionList extends Component{
    render(){
        const list = [
            {
                title: 'Title',
                key: '1',
            },
            {
                title: 'Another Title',
                key: '2',
            }
        ]
        return(
            <Layout
                title="Recomendado Para ti"
            >
                <FlatList //Lista sencilla
                data={list}
                renderItem={({item})=> <Text>{item.title}</Text>}
                >
                </FlatList>
            </Layout>
        );
    }
}

export default SuggestionList;
