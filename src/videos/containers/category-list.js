import React, { Component } from 'react'
import{ View, FlatList} from 'react-native';

import Empty from '../components/empty';
import Category from '../components/category';
import Layout from '../components/categories-list-layout';
import VerticalSeparator from '../components/horizontal-separator';
class CategoryList extends Component{
    renderEmpty = () => <Empty text="No hay sugerencias :("/>
    itemSeparator = () => <VerticalSeparator/>
    renderItem = ({item}) => {
        return(<Category {...item}></Category>);
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

export default CategoryList;