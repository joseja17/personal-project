import React, { Component } from 'react';
import './Header.css';
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';

class Header extends Component {

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        let { userData } = this.props;
        return (
            <div className="Header_header">
            <li className="Header_list_item"><a className="Header_name" href="/">HOME</a></li>
            <li className="Header_list_item"><a className="Header_name" href="/#/Adventures">ADVENTURES</a></li>
            <li className="Header_list_item"><a className="Header_name" href="/#/private">MAP</a></li>
            <span><a className="Header_name_name" >{userData.user_name ? userData.user_name : null}</a></span>
            {
                userData.img ?
                    <img className="avatar" alt="" src={userData.img} /> :
                    null
            }
            {userData.user_name?
            <a className="Header_name_logout" href={process.env.REACT_APP_LOGOUT}>LOGOUT</a>
            :
            <a className="Header_name_login" href="/#/login">LOGIN</a>
            }
        </div>
        )
    }
}
function mapsStateToProps(state) {
    return {
        userData: state.user
    }
}
export default connect(mapsStateToProps, { getUser })(Header);