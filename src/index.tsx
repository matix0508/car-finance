import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getAuth} from "firebase/auth";
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore/lite";
import { Login } from './components/auth/Login/Login';

const firebaseConfig = {
  apiKey: "AIzaSyC-fKftTLZrUaVATVGDXJCkyOlK4um7F8Q",
  authDomain: "car-finance-33293.firebaseapp.com",
  projectId: "car-finance-33293",
  storageBucket: "car-finance-33293.appspot.com",
  messagingSenderId: "579473867965",
  appId: "1:579473867965:web:76ff2b733c33e5442ba3d4",
  measurementId: "G-KNTY2EXB75"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
