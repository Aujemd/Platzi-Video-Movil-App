import React, {Component} from 'react';

import { Provider } from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

import Loading from './src/sections/components/loading';
import AppNavigatorWithState from './src/app-navigator-with-state';

export default class App extends Component {
  render(){
    console.disableYellowBox = true; //Para quitar los Warnings
    return(
      <Provider
        store = {
          store
        }
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
        
        <AppNavigatorWithState/>
        
        </PersistGate>
      </Provider>
    );
  }
}

//npm i react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context react-navigation-stack @react-native-community/masked-view --save 
//npm i react-navigation-redux-helpers
//npm i react-navigation-tabs
//npm i react-navigation-drawer