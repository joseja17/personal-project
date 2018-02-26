// import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import { connect } from 'react-redux';
import { getImages } from '../../ducks/reducer';


class Modal4 extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <div><div className="line4"><hr className="line4hr" /></div>
                    Images</div>
                <div>
                    <input
                        onChange={(e) => getImages(e.target.value)} />
                </div>
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