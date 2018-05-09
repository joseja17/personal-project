import axios from 'axios'
import React, { Component } from 'react';
import './Modal1.css'
import { connect } from 'react-redux';
import MapContainer2 from '../Map/MapContainer2'
import { getLocation } from '../../ducks/reducer'
import { getLatLong } from '../../ducks/reducer'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />


class Modal1 extends Component {
    constructor() {
        super()
        this.state = {
            location: "",
            lat: 40,
            lng: -111
        }
        this.getCoordinates = this.getCoordinates.bind(this)
    }
    handleChange(e) {
        this.props.getLocation(e.target.value)
        this.setState({
            location: e.target.value
        })
    }

    getCoordinates() {
        axios.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.location + '&key=AIzaSyC45ozcxrtnKnKn9KUtswSw-ikgWrjePhs').then(resp => {
            console.log(resp)
            this.props.getLatLong(resp.data.results[0].geometry.location.lat, resp.data.results[0].geometry.location.lng)
            this.setState({
                lat: resp.data.results[0].geometry.location.lat,
                lng: resp.data.results[0].geometry.location.lng
            })
        })
    }



    render() {
        // const {getLocation} = this.props
        return (
            <div>
                <Desktop>
                    <div className="Modal1_body-d">
                        <div className="Location_title-d">Location:</div>
                        <input
                            className="inputModal1-d" placeholder="City Name"
                            onChange={(e) => {
                                this.handleChange(e)
                            }} />
                        <button className="button-modal1-d" onClick={this.getCoordinates}>Search</button>
                        <MapContainer2 newLocation={this.state.location} lat={this.state.lat} lng={this.state.lng}></MapContainer2>
                    </div>
                </Desktop>

                <Tablet>
                    <div className="Modal1_body-t">
                        <div className="Location_title-t">Location:</div>
                        <input
                            className="inputModal1-t" placeholder="City Name"
                            onChange={(e) => {
                                this.handleChange(e)
                            }} />
                        <button className="button-modal1-t" onClick={this.getCoordinates}>Search</button>
                        <MapContainer2 newLocation={this.state.location} lat={this.state.lat} lng={this.state.lng}></MapContainer2>
                    </div>
                </Tablet>
            </div>


        )
    }
}

function mapStateToProps(state) {
    const { location } = state;
    return {
        location
    };
}
export default connect(mapStateToProps, { getLocation, getLatLong })(Modal1);