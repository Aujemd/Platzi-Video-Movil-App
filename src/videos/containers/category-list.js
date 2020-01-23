import React, { Component } from 'react'
import{ View, FlatList} from 'react-native';

import Empty from '../components/empty';
import Category from '../components/category';
import Layout from '../components/categories-list-layout';
import VerticalSeparator from '../components/horizontal-separator';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';


function mapStateToProps(state) {
    return {
        list: state.videos.categoryList,
    }        
}

class CategoryList extends Component{
    renderEmpty = () => <Empty text="No hay sugerencias :("/>
    itemSeparator = () => <VerticalSeparator/>
    viewCategory = (item) => {
        this.props.dispatch(
            NavigationActions.navigate({
                routeName: 'Category',
                params: {
                    genre: item.genres[0],
                }
            })
        )
    }
    renderItem = ({item}) => {
        return(<Category {...item} onPress = {() => {this.viewCategory(item)}}></Category>);
    }
    keyExtractor = item => item.id.toString();



    render(){
        return(  
            <Layout
                title = "Categorias"
            >
                <FlatList //Lista sencilla
                    horizontal //Poner lista horizontal
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

export default connect(mapStateToProps)(CategoryList);