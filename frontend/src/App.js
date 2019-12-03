import React, { Component } from "react";
import { HashRouter , Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import {hot} from "react-hot-loader";
import "./App.css";
import Home from './Home';
import Login from './Login'

const history =  createBrowserHistory()

class App extends Component{
  render(){
    return(
      <HashRouter>
        <div className="App">
          <h1> Fk u </h1>
          <Switch>
            <Route exact path = '/'  component={Home} />
            <Route exact path = '/Login' component={Login} /> 
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default hot(module)(App);