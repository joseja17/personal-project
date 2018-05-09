import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Private from './components/Private/Private'
import Adventures from './components/Adventures/Adventures'
import Login from './components/Login/Login'
import Edit from './components/Edit/Edit'
import Stripe from './components/Stripe/Stripe'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HashRouter>
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route path='/edit/:id' component={Edit}/>
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
