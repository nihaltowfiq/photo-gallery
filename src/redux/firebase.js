import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyC6wfQsZGLrmeVpkfcWlvMDjEfMwQbEFMM',
    authDomain: 'database-for-projects-f2951.firebaseapp.com',
    projectId: 'database-for-projects-f2951',
    storageBucket: 'database-for-projects-f2951.appspot.com',
    messagingSenderId: '1011682254368',
    appId: '1:1011682254368:web:1d826628b304f3a83f6645',
});

export const firebaseAuth = app.auth();

export default app;
