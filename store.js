import { createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducers/videos';
import {AsyncStorage} from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['selectedMovie'], //Objetos que no van a persistir en el store persistido
  }
  
const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor};