import { createStore, combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import profileReducer from '../reducers/profileReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const rootReducer = combineReducers(
    { user: persistReducer(persistConfig, profileReducer) }
);

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(rootReducer);
const persistor = persistStore(store);

// const configureStore = () => {
//     return createStore(persistedReducer);
// }
// const persistor = () => {return persistStore(configureStore());}
export {store, persistor};