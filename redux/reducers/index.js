  
import { combineReducers, createStore } from 'redux';

import profileReducer from './profileReducer'

const AppReducers = combineReducers({
    profileReducer,
});


const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);

export default store;