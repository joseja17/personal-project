import React, { Component } from 'react';
import logo from './adventures.png';
import './Login.css';
export default class Login extends Component {
    render() {
        return (
            <div className='box'>  
                <img className="img" src={logo} alt=""/>
                <a href={ process.env.REACT_APP_LOGIN }>
                    <button className="button-login">Login</button>
                </a>
            </div> 
        )
    }
}