import React, { Component } from 'react';
import './Modal2.css'
import {connect} from 'react-redux';
import {getTitle, getDate} from '../../ducks/reducer'; 

class Modal2 extends Component {
   
    render() {
        return (
            <div className="Modal2_body">
            <div className="Title_Title">Title:</div>
                <input
                className="inputModal2_Title"
                    onChange={ ( e ) => this.props.getTitle( e.target.value ) } />
                    <div className="Date_Title">Date:</div>
                <input
                className="inputModal2_Date"
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