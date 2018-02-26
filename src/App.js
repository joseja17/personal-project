import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';
import Private from './components/Private/Private'
import Adventures from './components/Adventures/Adventures'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HashRouter>
         <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/private' component={Private}/>
            <Route path='/Adventures' component={Adventures}/>

         </Switch>
       </HashRouter>
      </div>
    );
  }
}

export default App;
