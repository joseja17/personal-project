// import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import { connect } from 'react-redux';
import { getImages } from '../../ducks/reducer';


class Modal4 extends Component {
    render() {
        return (
            <div>
               
                    <input
                    
                        onChange={(e) => getImages(e.target.value)} />
               
            </div>
        )
    }
}

function mapStateToProps(state){
    const{images} =state;
    return {
        images
    }
}
export default connect(mapStateToProps, {getImages})(Modal4);