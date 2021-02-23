/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';
import { firebaseAuth } from './firebase';

const authSuccess = (email, userId, name) => {
    // console.log('authSuccesss:', email, userId, name);
    return { type: actionTypes.AUTH_SUCCESS, payload: { email, userId, name } };
};

const updateProfile = (name) => {
    firebaseAuth.currentUser.updateProfile({
        displayName: name,
    });
};

export const auth = (email, password, name, toggleOption) => {
    return (dispatch) => {
        if (toggleOption === true) {
            firebaseAuth
                .createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { email, uid } = userCredential.user;
                    updateProfile(name);
                    dispatch(authSuccess(email, uid, name));
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        } else {
            firebaseAuth
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { email, uid, displayName } = userCredential.user;
                    // console.log('AUTH:', email, uid, displayName);
                    dispatch(authSuccess(email, uid, displayName));
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };
};

export const logout = () => {
    firebaseAuth
        .signOut()
        .then((res) => {
            console.log(res);
        })
        .catch((error) => console.log(error));
    return { type: actionTypes.LOG_OUT };
};
