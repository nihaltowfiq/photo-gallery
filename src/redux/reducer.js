/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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
    authErrMsg: null,
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
            return {
                ...state,
                email: action.payload.email,
                userId: action.payload.userId,
                name: action.payload.name,
            };
        case actionTypes.LOG_OUT:
            return {
                ...state,
                email: null,
                userId: null,
                name: null,
            };
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                authErrMsg: action.payload,
            };
        default:
            return state;
    }
};

const commentReducer = (state = { comments: [] }, action) => {
    let newComments = [];
    switch (action.type) {
        case actionTypes.LOAD_COMMENTS:
            for (const key in action.payload) {
                newComments.push({ ...action.payload[key], id: key });
            }
            return { ...state, comments: newComments };
        case actionTypes.ADD_COMMENT:
            newComments = [...state.comments, action.payload];
            return { ...state, comments: newComments };
        default:
            return state;
    }
};

const Reducer = combineReducers({
    photos: photoReducer,
    user: authReducer,
    comments: commentReducer,
});

export default Reducer;
