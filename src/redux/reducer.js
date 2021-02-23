/* eslint-disable no-case-declarations */
import { combineReducers } from 'redux';
import { PHOTOS } from '../data/photos';
import * as actionTypes from './actionTypes';

const initialState = {
    photoState: { isLoading: false, photos: PHOTOS, errMsg: null },
    // userState: { email: null, name: null, userId: null },
    email: null,
    name: null,
    userId: null,
};

const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_SUCCESS:
            // const newUser = {
            //     email: action.payload.email,
            //     userId: action.payload.userId,
            //     name: null,
            // };
            return {
                ...state,
                email: action.payload.email,
                userId: action.payload.userId,
                name: action.payload.name,
            };
        default:
            return state;
    }
};

const Reducer = combineReducers({
    photos: photoReducer,
    user: authReducer,
});

export default Reducer;
