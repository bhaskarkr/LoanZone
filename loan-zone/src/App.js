import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/signup/signup';
import Login from './components/login'
import Landing from './components/landing'
import Home from './components/home'
import Err from './components/err'
import { connect } from "react-redux";
import Bordash from './components/BorrowerDashBoard/LendersDashboard'

const PrivateRoute = ({Component, isAuthenticated, ...rest}) => {
  console.log("isAuthenticated :", isAuthenticated())
  return (
  <Route {...rest} render={props => (
    isAuthenticated() 
      ? 
      (<Router><Component {...props}/></Router>)
      :
      (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
      )  }/>)
}

function App(props) {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/register" component={SignUp}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute path="/bordash" isAuthenticated={props.isAuthenticated}  Component={Bordash}/> 
      <Route component={Err}/>
    </Switch>
  </Router>
    // {<div className="App">
    //   <p>test</p>

    //     <SignUp />

    // </div>}
  );
}
const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  dispatch: (action) => dispatch(action)
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
