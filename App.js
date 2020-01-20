import React, {Component} from 'react';

import { Provider } from 'react-redux';
import {store, persistor} from './store';
import {PersistGate} from 'redux-persist/integration/react';

import Loading from './src/sections/components/loading';
import AppLayout from './src/app';

export default class App extends Component {
  render(){
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
        <AppLayout></AppLayout>

        </PersistGate>
      </Provider>
    );
  }
}

//npm install --save redux-persist
// npm i @react-native-community/async-storage
//npm i react-native-webview

//PARA GENERAR EL APK

//HACER LOS PASOS DE LA DOC
//AL FINAL CAMBIAR LOS DOS ULTIMOS COMANDOS POR
// gradlew assembleRelease
// react-native run-android --variant=release