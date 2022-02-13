import React from 'react';
import './App.css';
import plus from './add1.png'
import ques from './c.png'

function BlogContent() {
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

        <input placeholder="Search for blogs..."className="Search"/>
        <button className="search_">Search</button>

        <a href="/addBlog" className="aBlogs"><img src={plus} style={{width: "29px"}}/></a>

        <a href="/yourBlogs" className="yBlogs"><img src={ques} style={{width: "29px"}}/></a>
      </div>

      <div className="main_content">
        <div className="for_title">
          <h1>{localStorage.getItem("title")}</h1>
        </div>
        
        <p>{localStorage.getItem("cont")}</p>
        <h2>-{localStorage.getItem("tit")}</h2>
      </div>
    </>
  );
}

export default BlogContent;