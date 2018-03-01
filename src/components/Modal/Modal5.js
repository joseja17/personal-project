import axios from 'axios'
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Modal.css'
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
            <div><div className="line5"><hr className="line5hr"/></div>
            <Link to="/Adventures">
            <button className="button-modal" onClick={this.newAdventure}>Post Adventure</button>
            </Link>

           <Link to="private">
              <button className="button-modal"> Login to Submit </button>
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