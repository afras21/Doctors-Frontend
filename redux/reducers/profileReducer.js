import * as Actions from '../actions/actionTypes';

var initialState = {
    id: '',
    name: '',
    phoneNumber: '',
    dp: '',
    email: ''
}
const profileReducer = (state =initialState, action) => {
    switch (action.type){
        case Actions.SAVE_USER:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber,
                dp: action.payload.dp,
                email: action.payload.email
            };
        default:
            return state;
    }
}
export default profileReducer;