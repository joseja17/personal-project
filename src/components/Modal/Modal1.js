import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import {connect} from 'react-redux';
import MapContainer2 from '../Map/MapContainer2'
import {getLocation} from '../../ducks/reducer'
import {getLatLong} from '../../ducks/reducer'


class Modal1 extends Component {
    constructor() {
        super()
        this.state = {
            location:"",
            lat: 40,
            lng: -111
        }
        this.getCoordinates=this.getCoordinates.bind(this)
    }
    handleChange(e){
        this.props.getLocation(e.target.value)
        this.setState({
            location: e.target.value
        })
    }

    getCoordinates(){
        axios.post('https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.location+'&key=AIzaSyC45ozcxrtnKnKn9KUtswSw-ikgWrjePhs').then(resp=>{
            console.log(resp)
          this.props.getLatLong(resp.data.results[0].geometry.location.lat, resp.data.results[0].geometry.location.lng)  
            this.setState({
                lat: resp.data.results[0].geometry.location.lat,
                lng: resp.data.results[0].geometry.location.lng
            })
        })
        }


    
    render() {
        const {getLocation} = this.props
        return (
            <div>
                <div className="line1" ><hr className="line1hr" /></div>
                Location: <input 
                className="input1" placeholder="City Name"
                onChange={(e) =>{ 
                    this.handleChange(e)
                }}/>
                <button className="button-modal" onClick={this.getCoordinates}>Click</button>
                <MapContainer2 newLocation={this.state.location} lat={this.state.lat} lng={this.state.lng}></MapContainer2>
            </div>


        )
    }
}

function mapStateToProps(state){
    const{location}= state;
    return {
        location
    };
}
export default connect(mapStateToProps, {getLocation, getLatLong})(Modal1);