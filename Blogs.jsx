import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./Login.jsx"

function Blogs({name, content, title}) {
  const [link_, setLink_] = useState('')
  
  return (
    <>
      <div className="blogMain" onClick={() => {
        setLink_(name)
        localStorage.setItem("title", name)
        localStorage.setItem("cont", content)
        localStorage.setItem("tit", title)
        location.href = "/blogs/" 
      }}>
        <h2>{name}</h2>
        <p>{content}</p>
      </div>
    </>
  );
}

export default Blogs;