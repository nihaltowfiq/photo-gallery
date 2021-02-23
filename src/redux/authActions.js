/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';
import { firebaseAuth } from './firebase';

const authSuccess = (email, userId) => {
    console.log('authSuccesss:', email, userId);
    return { type: actionTypes.AUTH_SUCCESS, payload: { email, userId } };
};

export const auth = (email, password, toggleOption) => {
    return (dispatch) => {
        if (toggleOption === true) {
            firebaseAuth
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { email, uid } = userCredential.user;
                    dispatch(authSuccess(email, uid));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        } else {
            firebaseAuth
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { email, uid } = userCredential.user;
                    console.log('AUTH:', email, uid);
                    dispatch(authSuccess(email, uid));
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };
};
