import React from 'react'
import "./App.css";
import Quora from './components/Quora';
import { Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Logout from './components/auth/logout';

const App = () => {
  return (
    <div className="App">
      <Route exact path="/" >
        <Quora />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/logout">
        <Logout />
      </Route>
    </div>
  )
}

export default App