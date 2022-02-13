import React, { useState } from 'react';
import './App.css';
import { initializeApp } from '@firebase/app'
import { getFirestore, addDoc, collection } from "@firebase/firestore"
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

function AddBlog() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [name, setName] = useState('')

  const app = initializeApp(firebaseConfig)

  const db_ = getFirestore(app)  
  const usersCollectionsRef = collection(db_, "users")

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

        <input placeholder="Search for blogs..." className="Search"/>
        <button className="search_">Search</button>
        <a href="/addBlog" className="aBlogs"><img src={plus} style={{width: "29px"}}/></a>
        <a href="/yourBlogs" className="yBlogs"><img src={ques} style={{width: "29px"}}/></a>
      </div>
      <div className="inputs">
        <h2>Title</h2>
        <input className="Title" placeholder="Title.." onChange={(e) => {
          setTitle(e.target.value)
        }}/>

        <h1>Content</h1>        
        <textarea className="cont" placeholder="Content goes here..." onChange={(e) => {
          setContent(e.target.value)
        }}/>

        <h2>Name</h2>        
        <input className="name1" placeholder="Name..." onChange={(e) => {
          setName(e.target.value)
        }}/>
      </div>
      <button className="submit" onClick={async () => {
        await addDoc(usersCollectionsRef, {content: content,name: name, title: title})
        location.href = '/home'
      }}>Add blog</button>
    </>
  );
}

export default AddBlog;