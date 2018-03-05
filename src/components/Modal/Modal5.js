import axios from 'axios'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Modal5.css'
import {connect} from 'react-redux';

class Modal5 extends Component {
    constructor(props) {
        super(props)
        this.newAdventure = this.newAdventure.bind(this);
    }

newAdventure(){
    console.log(this.props)
    let data = this.props
    axios.post('/api/adventures', data).then(resp=>{
        console.log(resp)
    })
}

gettingAdv(){
    axios.get().then(resp=>{

    })
}



    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Ready to share your adventure?</h1>
            <Link to="/Adventures">
            <button className="btn-post" onClick={this.newAdventure}>Post Adventure</button>
            </Link>
            </div>

        )
    }
}

function mapStateToProps( state ) {
    return{ 
        location: state.location,
        title: state.title,
        date: state.date,
        details: state.details,
        images: state.images,
        latitud: state.latitud,
        longitud: state.longitud
    };
  }
  

export default connect(mapStateToProps, null)(Modal5);