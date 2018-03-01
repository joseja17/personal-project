// import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import {connect} from 'react-redux';
import {getDetails} from '../../ducks/reducer'; 


class Modal3 extends Component {
    render() {
        return (
            <div><div className="line3"><hr className="line3hr"/></div>
            Details: <input  onChange={ ( e ) => this.props.getDetails( e.target.value ) }  placeholder="Your story here ..." className="input3"/>
            </div>

        )
    }
}
function mapStateToProps(state){
    const{details} =state;
    return {
        details
    }
}
export default connect(mapStateToProps, {getDetails})(Modal3);
