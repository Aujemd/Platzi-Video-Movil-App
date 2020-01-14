import React, {Component} from 'react';

import{
  Text,
}from 'react-native';

import Home from './src/screens/containers/home';

export default class App extends Component {
  render(){
    return(
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <Text>Sugerencias</Text>
      </Home>
    );
  }
}