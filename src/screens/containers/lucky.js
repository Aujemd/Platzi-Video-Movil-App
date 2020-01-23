import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Search from '../../sections/containers/search';

class Lucky extends Component {
    static navigationOptions = () => { //Metodo estatico para configurar navigation options donde Agregamos header personalizado a esta screen como en react-navigation 
        return{
            title: 'Voy a tener suerte',
            tabBarIcon: <Text>🍀</Text>
        }
    }

    componentDidMount(){
        this.focus = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('white'); //Solo en android porque en IOS EL Background  color es transparante
        });
    }

    componentWillUnmount(){
        this.focus.remove(); //Para evitar problemas de memoria
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>🍀</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Lucky