import React, { Component } from 'react';
import './Header.css';
import { getUser } from './../../ducks/reducer';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={830} maxWidth={991} />
const Phone = props => <Responsive {...props} minWidth={1} maxWidth={829} />

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dropdown: false
        }
        this.openDropdown = this.openDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    }

    componentDidMount() {
        this.props.getUser();
    }

    openDropdown() {
        this.setState({
            dropdown: !this.state.dropdown
        })
        console.log('Abierto')
    }

    closeDropdown() {
        this.setState({
            dropdown: false
        })
        console.log('Cerrado')
    }

    render() {
        let { userData } = this.props;
        return (
            <div>
                <Desktop>
                    <div className="Header_header-d">
                        <li className="Header_list_item-d"><a className="Header_name-d" href="/">HOME</a></li>
                        <li className="Header_list_item-d"><a className="Header_name-d" href="/#/Adventures">ADVENTURES</a></li>
                        <li className="Header_list_item-d"><a className="Header_name-d" href="/#/private">MAP</a></li>
                        <span><a className="Header_name_name-d" >{userData.user_name ? userData.user_name : null}</a></span>
                        {
                            userData.img ?
                                <img className="avatar-d" alt="" src={userData.img} /> :
                                null
                        }
                        {userData.user_name ?
                            <a className="Header_name_logout-d" href={process.env.REACT_APP_LOGOUT}>LOGOUT</a>
                            :
                            <a className="Header_name_login-d" href="/#/login">LOGIN</a>
                        }
                    </div>
                </Desktop>

                <Tablet>
                    <div className="Header_header-t">
                        <li className="Header_list_item-t"><a className="Header_name-t" href="/">HOME</a></li>
                        <li className="Header_list_item-t"><a className="Header_name-t" href="/#/Adventures">ADVENTURES</a></li>
                        <li className="Header_list_item-t"><a className="Header_name-t" href="/#/private">MAP</a></li>
                        <span><a className="Header_name_name-t" >{userData.user_name ? userData.user_name : null}</a></span>
                        {
                            userData.img ?
                                <img className="avatar-t" alt="" src={userData.img} /> :
                                null
                        }
                        {userData.user_name ?
                            <a className="Header_name_logout-t" href={process.env.REACT_APP_LOGOUT}>LOGOUT</a>
                            :
                            <a className="Header_name_login-t" href="/#/login">LOGIN</a>
                        }
                    </div>
                </Tablet>

                <Phone>
                    <div className="Header_header-p">
                        <div className="dropdown-p">
                            <img onClick={this.openDropdown} className="menu-p" src="./menu.svg" />
                            {
                            userData.img ?
                                <img className="avatar-p" alt="" src={userData.img} /> :
                                null
                        }
                            {
                                this.state.dropdown ?
                                    <div>
                                        <img onClick={this.closeDropdown} className="menu-p" src="./menu.svg" />
                                        <div className="dropdown-open-p">
                                            <li className="a-tag-p" ><a href="/" className="home-tag-p">HOME</a></li>
                                            <li className="a-tag-p" ><a  href="/#/Adventures" className="adv-tag-p">ADVENTURES</a></li>
                                            <li className="a-tag-p"><a   href="/#/private" className="map-tag-p">MAP</a></li>
                                            {userData.user_name ?
                                                <li className="a-tag-p" ><a href={process.env.REACT_APP_LOGOUT} className="logout-tag-p">LOGOUT</a></li>
                                                :
                                                <li className="a-tag-p" ><a href="/#/login" className="login-tag-p">LOGIN</a></li>
                                            }
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>

                    </div>
                </Phone>
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


{/* <li className="Header_list_item-p"><a className="Header_name-p" href="/">HOME</a></li>
<li className="Header_list_item-p"><a className="Header_name-p" href="/#/Adventures">ADVENTURES</a></li>
<li className="Header_list_item-p"><a className="Header_name-p" href="/#/private">MAP</a></li>
<span><a className="Header_name_name-p" >{userData.user_name ? userData.user_name : null}</a></span> */}