import { createStore, combineReducers } from 'redux';
// import store from '../reducers';
import profileReducer from '../reducers/profileReducer';

const rootReducer = combineReducers(
    { user: profileReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;