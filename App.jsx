import React from 'react';
import './App.css';
import SignUp from './SignUp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './Login'
import Home from './Home.jsx'
import AddBlog from './AddBlog.jsx'
import Blogs from './Blogs'
import BlogContent from './BlogContent'

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" >
          <SignUp />
        </Route>
        <Route path="/login" >
          <Login />
        </Route>
        <Route path="/home" >
          <Home />
        </Route>
        <Route path="/addBlog" >
          <AddBlog />
        </Route>
        <Route path="/blogs/">
          <BlogContent />
        </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;