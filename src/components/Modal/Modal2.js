// import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import {connect} from 'react-redux';
import {getTitle, getDate} from '../../ducks/reducer'; 

class Modal2 extends Component {
   
    render() {
        return (
            <div>
                <div className="line2"><hr className="line2hr" /></div>
                Title: <input
                    onChange={ ( e ) => this.props.getTitle( e.target.value ) } />
                Date: <input
                 onChange={ ( e ) => this.props.getDate( e.target.value ) }
                 type="date" />
            </div>

        )
    }
}

function mapStateToProps(state){
    const{title, date} =state;
    return {
        title, 
        date
    }
}
export default connect(mapStateToProps, {getTitle, getDate})(Modal2);