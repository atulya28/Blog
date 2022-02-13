import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { initializeApp } from '@firebase/app'
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIlgoOlebJ38csOZWPyp8qVe73DbBvq0g",
  authDomain: "zed-b-8f61d.firebaseapp.com",
  projectId: "zed-b-8f61d",
  storageBucket: "zed-b-8f61d.appspot.com",
  messagingSenderId: "478120367741",
  appId: "1:478120367741:web:9b3b426dd8966f80bc8314",
  measurementId: "G-4HZ4M7NGYJ"
};

function SignUp() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const app = initializeApp(firebaseConfig)

  return (
    <>
      <div className="login_">
        <h2 className="header">Sign up</h2>
          <input placeholder="Enter a username..." className="name" onChange={(e) =>{
            setEmail(e.target.value)
          }}/>
          <input type="password" placeholder="Enter a password..." className="pass" onChange={(e) =>{
            setPassword(e.target.value)
          }}/>
          <button className="sign-up" onClick={async () =>{
              const auth = getAuth()
              createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user
                location.href = '/home'
              })
              .catch((error) => {
                alert(error)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
              });
          }}>Sign up</button>
          <a className="log" id="l" href="/login">Already have an account? Login.</a>
        </div>
    </>
  );
}

export default SignUp;