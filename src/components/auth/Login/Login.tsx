import React, {useState} from 'react'
import {signInWithPopup, GoogleAuthProvider, User} from 'firebase/auth'
import { auth } from '../../..';

export const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState<User>();
    const [error, setError] = useState<any>();
    const login = () => {signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        setUser(user)
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
        const credential = GoogleAuthProvider.credentialFromError(err);
        setError({code: errorCode, message: errorMessage, email: email, credential: credential});
    })};
    if (user) {
        return <div>{user.displayName}</div>
    }
    if (error) {
        return <div>{error.message}</div>
    }
    return <button onClick={login}>Login</button>
}
