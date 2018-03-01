import React, { Component } from 'react';
import './Private.css'
// import axios from 'axios'
import { connect } from 'react-redux';
import { getUser } from './../../ducks/reducer';
import MapContainer from '../Map/MapContainer';

class Private extends Component {

    componentDidMount() {
        this.props.getUser();

    }

    pageLoad() {
        window.location.reload(true)
    }

    render() {
        let { userData } = this.props;
        return (
            <div className="Private">
                <div className="Private_header">
                    <ul className="Private_list">
                        <li className="Private_list_item"><a className="Private_name" href="/#/home">Home</a></li>
                        <li className="Private_list_item" ><a className="Private_name" href="/#/Adventures">Adventures</a></li>
                        <li className="Private_list_item"><a className="Private_name" href="/#/private">Map</a></li>
                    </ul>
                    <ul className="Private_list">
                        <span><a className="Private_name">{userData.user_name ? userData.user_name : null}</a></span>
                        {
                            userData.img ?
                                <img className='avatar' src={userData.img} /> :
                                null
                        }
                        <li className="Private_list_item"><a className="Private_name" href={process.env.REACT_APP_LOGOUT}>Logout</a></li>
                    </ul>
                </div>
                <MapContainer></MapContainer>
                <div>
                    <button className="button-markers" onClick={() => this.pageLoad()}>Get Markers</button>
                </div>
            </div>
        )
    }
}
function mapsStateToProps(state) {
    return {

        userData: state.user

    }
}

export default connect(mapsStateToProps, { getUser })(Private);