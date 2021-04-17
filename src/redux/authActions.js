/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import * as actionTypes from './actionTypes';
import { firebaseAuth } from './firebase';

const authSuccess = (email, userId, name) => {
    return { type: actionTypes.AUTH_SUCCESS, payload: { email, userId, name } };
};

const authFailed = (msg) => {
    return { type: actionTypes.AUTH_FAILED, payload: msg };
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
                    const { message } = error;
                    dispatch(authFailed(message));
                });
        } else {
            firebaseAuth
                .signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const { email, uid, displayName } = userCredential.user;
                    dispatch(authSuccess(email, uid, displayName));
                })
                .catch((error) => {
                    const { code } = error;
                    if (code === 'auth/user-not-found') {
                        dispatch(authFailed('User not found, create an account!'));
                    } else if (code === 'auth/wrong-password') {
                        dispatch(authFailed('Wrong password, try again!'));
                    }
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
