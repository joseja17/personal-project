import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios'
import './Map.css'

export default class Map2 extends Component {
    constructor(props) {
        super(props)
    
        const {lat, lng} = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        }
      } 
    componentDidMount() {
        console.log(this.state.lat)
        axios.get('/api/adventures').then(res => {
            console.log(res)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google || prevProps.initialCenter.lat !== this.props.initialCenter.lat) {
            this.loadMap()
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 4;
            // let lat = 40.296898;
            // let lng = -111.694649;
            let { initialCenter } = this.props;
            var {lat, lng} = initialCenter;
            // lat = parseInt(lat);
            // lng = parseInt(lng);
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                mapTypeId: 'terrain'
            })
            this.map = new maps.Map(node, mapConfig);
            // for loop starts here

            const marker = new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: this.map,
                animation: google.maps.Animation.DROP,
                title: 'Click for more details.',
            })

            const InfoWindow = new google.maps.InfoWindow({
                content: `See More`
            })
            marker.addListener('click', function () {
                InfoWindow.open(this.map, marker)
            })
        }
    }

    render() {
        return (
            <div ref="map" className="Map_2">
                Add the location of your Adventure
            </div>
        )
    }
}