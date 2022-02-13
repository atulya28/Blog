import React, { useState } from 'react';
import './App.css';
import { getAuth, signOut } from "@firebase/auth";
import { initializeApp } from '@firebase/app'
import blog from './blog4.jpg'
import MainBlogs from './MainBlogs.jsx'
import Blogs from './Blogs.jsx'
import plus from './add1.png'
import ques from './c.png'

const firebaseConfig = {
  apiKey: "AIzaSyCIlgoOlebJ38csOZWPyp8qVe73DbBvq0g",
  authDomain: "zed-b-8f61d.firebaseapp.com",
  projectId: "zed-b-8f61d",
  storageBucket: "zed-b-8f61d.appspot.com",
  messagingSenderId: "478120367741",
  appId: "1:478120367741:web:9b3b426dd8966f80bc8314",
  measurementId: "G-4HZ4M7NGYJ"
};

function Home() {
  const app = initializeApp(firebaseConfig)
  const [val, setVal] = useState('')
  const [search1, setSearch1] = useState('')

  return (
    <>
      <div className="navbar" id="n">
        <h1 className="logo">Logs</h1>
        <button className="logout" onClick={() => {
          const auth = getAuth();
          signOut(auth).then(() => {
            location.href = "/"
          }).catch((error) => {
            console.log(error)
          });
        }}>Logout</button>

        <input placeholder="Search for blogs..." className="Search" onChange={(e) => {
          setVal(e.target.value)
        }}/>

        <button className="search_" onClick={() => {
          setSearch1(val)
        }}>Search</button>

        <a href="/addBlog" className="aBlogs"><img src={plus} style={{width: "26px"}}/></a>

        <a href="/yourBlogs" className="yBlogs"><img src={ques} style={{width: "26.5px"}}/></a>
      </div>
      <img src={blog} className="bg" id="background"/>
      <MainBlogs search={search1} val={val}/>
    </>
  );
  document.getElementById("n").width = window.innerWidth
  document.getElementById("background").height = window.innerheight
}

export default Home;