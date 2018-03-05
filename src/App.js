import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Private from './components/Private/Private'
import Adventures from './components/Adventures/Adventures'
import Login from './components/Login/Login'
import Stripe from './components/Stripe/Stripe'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HashRouter>
         <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/private' component={Private}/>
            <Route path='/Adventures' component={Adventures}/>
            <Route path='/donations' component={Stripe}/>
         </Switch>
       </HashRouter>
      </div>
    );
  }
}

export default App;
