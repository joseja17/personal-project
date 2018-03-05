// import axios from 'axios'
import React, { Component } from 'react';
import './Modal3.css'
import {connect} from 'react-redux';
import {getDetails} from '../../ducks/reducer'; 


class Modal3 extends Component {
    render() {
        return (
            <div className="Modal3_body">
             <div className="Details-Title">Details of your story:</div>
            <textarea  onChange={ ( e ) => this.props.getDetails( e.target.value ) }  placeholder="Your story here ..." className="input3"/>
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
