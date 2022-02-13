import React, { useEffect, useState } from 'react';
import './App.css';
import AddBlog from './AddBlog.jsx'
import Blogs from './Blogs.jsx'
import { initializeApp } from '@firebase/app'
import { getFirestore, addDoc, collection, getDocs } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIlgoOlebJ38csOZWPyp8qVe73DbBvq0g",
  authDomain: "zed-b-8f61d.firebaseapp.com",
  projectId: "zed-b-8f61d",
  storageBucket: "zed-b-8f61d.appspot.com",
  messagingSenderId: "478120367741",
  appId: "1:478120367741:web:9b3b426dd8966f80bc8314",
  measurementId: "G-4HZ4M7NGYJ"
};


function MainBlogs({search, val}) {
  const app = initializeApp(firebaseConfig)

  const [users1, setUsers] = useState([])
  const db_ = getFirestore(app)  
  const usersCollectionsRef = collection(db_, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getUsers()
  }, [])

  return (
    <>
      <div className="post">
        {users1.map(items => (
           items.title.includes(search) ? <Blogs title={items.name} content={items.content} name={items.title}/> 
          : val == "" && <Blogs title={items.name} content={items.content} name={items.title}/> 
        ))}
      </div>
    </>
  );
}

export default MainBlogs;

