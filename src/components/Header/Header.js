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
            <li className="Header_list_item"><a className="Header_name" href="/#/home">Home</a></li>
            <li className="Header_list_item"><a className="Header_name" href="/#/Adventures">Adventures</a></li>
            <li className="Header_list_item"><a className="Header_name" href="/#/private">Map</a></li>
            <span><a className="Header_name_name" >{userData.user_name ? userData.user_name : null}</a></span>
            {
                userData.img ?
                    <img className='avatar' src={userData.img} /> :
                    null
            }
           <a className="Header_name_logout" href={process.env.REACT_APP_LOGOUT}>Logout</a>
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