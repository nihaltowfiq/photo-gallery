/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { ADD_COMMENT, LOAD_COMMENTS } from './actionTypes';

const loadComments = (comments) => {
    return { type: LOAD_COMMENTS, payload: comments };
};

export const fetchComments = () => {
    return (dispatch) => {
        axios
            .get('https://database-for-projects-f2951-default-rtdb.firebaseio.com/comments.json')
            .then((res) => {
                dispatch(loadComments(res.data));
            });
    };
};

export const addComment = (comment) => {
    return { type: ADD_COMMENT, payload: comment };
};
