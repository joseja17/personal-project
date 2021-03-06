import React, { Component } from 'react';
import './Private.css';
import Header from '../Header/Header'
import MapContainer from '../Map/MapContainer';

class Private extends Component {

    pageLoad() {
        window.location.reload(true)
    }

    render() {
        return (
            <div className="Private">
                <Header></Header>
                <div>
                    <button className="button-markers" onClick={() => this.pageLoad()}>Get Markers</button>
                </div>
                <div>
                    <MapContainer></MapContainer>
                </div>
            </div>
        )
    }
}
export default Private;