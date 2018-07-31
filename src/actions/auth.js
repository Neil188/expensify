import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid,
});

export const startLogin = () =>
    () =>
        firebase.auth().signInWithPopup(googleAuthProvider);

export const logout = () => ({
    type: 'LOGOUT',
});

export const startLogOut = () =>
    () =>
        firebase.auth().signOut();
