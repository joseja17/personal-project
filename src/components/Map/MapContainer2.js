import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map2 from './../Map/Map2';
// import {connect} from 'react-redux';
// import axios from 'axios';

export class MapContainer2 extends Component {
    // constructor(props) {
    //     super(props);
    // }
  
    render() {
        return (
            <Map2 google={this.props.google} initialCenter={{lat: this.props.lat, lng: this.props.lng}}>                
            </Map2>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA2eOq_HlqmBfBvGJE0hURkoHGsnfXtv4c' 
})(MapContainer2);
