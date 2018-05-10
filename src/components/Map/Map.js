import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';
import '../Private/Private.css';


export default class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adventures: []
        }
    }
    componentDidMount() {
        axios.get('/api/adventures').then(res => {
            this.setState({
                adventures: res.data
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps)
        console.log(this.props)
        if (prevProps.google !== this.props.google) {
            this.loadMap()
        }
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);

            let zoom = 3;
            let lat = 40.296898;
            let lng = -111.694649;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom,
                mapTypeId: 'terrain'
            })
            this.map = new maps.Map(node, mapConfig);
            console.log(this.state.adventures)
            // for loop starts here
            for (var i = 0; i < this.state.adventures.length; i++) {
                const marker = new google.maps.Marker({
                    position: { lat: parseInt(this.state.adventures[i].latitud, 10), lng: parseInt(this.state.adventures[i].longitud, 10) },
                    map: this.map,
                    animation: google.maps.Animation.DROP,
                    title: 'Click for more details.',
                })
                const InfoWindow = new google.maps.InfoWindow({

                    content: `<h3>${this.state.adventures[i].title}</h3>
                    <h4>${this.state.adventures[i].location}</h4>
                    <h6>${this.state.adventures[i].date}</h6>
                    <a href="#/Adventures">See More</a>`,
                    maxWidth: 200
                })
                
                marker.addListener('click', function () {
                    InfoWindow.open(this.map, marker)
                })
                
            }
        }
        

        // ...
    }
    

    render() {

       

        return (
            <div className="mapita" ref="map" >
            <div className="titulo">
                Loading map...
            </div>
            </div>
        )
    }
}