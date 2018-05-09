import React, { Component } from 'react';
import logo from './adventures.png';
import './Login.css';
import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />

export default class Login extends Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className="login-page-d">
                        <div className='login-box-d'>
                            <img className="img-d" src={logo} alt="" />
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className="button-login-d">Login</button>
                            </a>
                        </div>
                    </div>
                </Desktop>
                
                <Tablet>
                    <div className="login-page-t">
                        <div className='login-box-t'>
                            <img className="img-t" src={logo} alt="" />
                            <a href={process.env.REACT_APP_LOGIN}>
                                <button className="button-login-t">Login</button>
                            </a>
                        </div>
                    </div>
                </Tablet>
            </div>
        )
    }
}
