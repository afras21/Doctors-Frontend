// import { connect } from 'react-redux';

import {SAVE_USER, UPDATE_USER} from './actionTypes';

export const saveUser = (data) => {
    return {
        type: SAVE_USER,
        payload: data
    }
}

export const updateUser = (data) => {
    return {
        type: UPDATE_USER,
        payload: data
    }
}
