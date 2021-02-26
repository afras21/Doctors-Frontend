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

const store = createStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };