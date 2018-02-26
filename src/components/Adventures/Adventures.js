import React, { Component } from 'react';
import './Adventures.css';
import { connect } from 'react-redux';
import { getLocation, getDate, getTitle, getDetails } from './../../ducks/reducer'
import axios from 'axios';

class Adventures extends Component {
    constructor(props){
        super(props)
        this.state={
            adventures:[]
        }
    }
    componentDidMount() {
        axios.get('/api/adventures').then(resp => {
            this.setState({
                adventures: resp.data
            })
        })
    }

    render() {
        let newAdv = this.state.adventures.map((val, i) => {
            return (
                <div>
                    <div>Lugar: {val.location} </div>
                    <div>Fecha: {val.date}</div>
                    <div>Titulo: {val.title}</div>
                    <div>Description: {val.details}</div>
                </div>

            )
        })
        return (
            <div className="Adventures">
                <nav className="Adventures_nav">
                    <ul className="Adventures_list">
                        <li className="Adventures_list_item"><a className="Adventures_name" href="#">Home</a></li>
                        <li className="Adventures_list_item"><a className="Adventures_name" href="#">About</a></li>
                        <li className="Adventures_list_item"><a className="Adventures_name" href="#">Blog</a></li>
                        {/* <li className="Adventures_list_item"><a className="Adventures_name" href='http://localhost:3005/logout'>Logout</a></li> */}
                    </ul>
                </nav>
                <div className="overarching-div">
                    <div className="form">
                        <div>
                            {newAdv}
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        location: state.location,
        title: state.title,
        date: state.date,
        details: state.details
    };
}
export default connect(mapStateToProps, { getLocation, getDate, getTitle, getDetails })(Adventures);