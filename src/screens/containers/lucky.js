import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Search from '../../sections/containers/search';

class Lucky extends Component {
    static navigationOptions = () => { //Metodo estatico para configurar navigation options donde Agregamos header personalizado a esta screen como en react-navigation 
        return{
            title: 'Voy a tener suerte',
        }
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