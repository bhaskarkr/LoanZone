import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/signup/signup';
import Login from './components/login'
import Landing from './components/landing'
import Home from './components/home'
import Err from './components/err'

function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/login" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/home" isAuthenticated={isAuthenticated}  Component={Home}/> 
      <Route component={Err}/>
    </Switch>
  </Router>
    // {<div className="App">
    //   <p>test</p>

    //     <SignUp />

    // </div>}
  );
}

export default App;
