import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { initializeApp } from '@firebase/app'
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCIlgoOlebJ38csOZWPyp8qVe73DbBvq0g",
  authDomain: "zed-b-8f61d.firebaseapp.com",
  projectId: "zed-b-8f61d",
  storageBucket: "zed-b-8f61d.appspot.com",
  messagingSenderId: "478120367741",
  appId: "1:478120367741:web:9b3b426dd8966f80bc8314",
  measurementId: "G-4HZ4M7NGYJ"
};

function Login() {
  const app = initializeApp(firebaseConfig)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="login_">
        <h2 className="header">Login</h2>
          <input placeholder="Enter a username..." className="name" onChange={(e) =>{
            setEmail(e.target.value)
          }}/>
          <input type="password" placeholder="Enter a password..." className="pass" onChange={(e) =>{
            setPassword(e.target.value)
          }}/>
          <button className="sign-up" onClick={async () =>{
            const auth = getAuth()
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                // alert("Signed in")
                location.href = '/home'
              })
            .catch((error) => {
              alert("Make an account")
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });

          }}>Login</button>
          <a className="log" id="l" href="/">Don't have an account? Sign up.</a>
        </div>
    </>
  );
}

export default Login;