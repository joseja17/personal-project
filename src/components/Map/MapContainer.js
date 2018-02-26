import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import Map from './../Map/Map';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Map google={this.props.google}>                
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA2eOq_HlqmBfBvGJE0hURkoHGsnfXtv4c' 
})(MapContainer);