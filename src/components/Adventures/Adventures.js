import React, { Component } from 'react';
import './Adventures.css';
import { connect } from 'react-redux';
import { getLocation, getDate, getTitle, getDetails, getUser } from './../../ducks/reducer'
import axios from 'axios';

class Adventures extends Component {
    constructor(props) {
        super(props)
        this.state = {
            adventures: []
        }
    }
    componentDidMount() {
        axios.get('/api/adventures').then(resp => {
            console.log(resp)
            this.setState({
                adventures: resp.data
            })
        })
    }
    pageLoad() {
        window.location.reload(true)
    }

    deleteAdv(id) {
        axios.delete('/api/adventures/' + id).then(resp => {
            this.setState({
                adventures: resp.data
            })
        })
    }

    render() {
        let { userData } = this.props;
        let newAdv = this.state.adventures.map((val, i) => {
            return (
                <div className="Adventures_box">
                    <div>Name: {val.user_name}</div>
                    <div>Place: {val.location} </div>
                    <div>Date: {val.date}</div>
                    <div>Title: {val.title}</div>
                    <div>Description: {val.description}</div>
                    <a><button onClick={() => this.deleteAdv(val.id)}>Delete</button></a>
                </div>
            )
        })
        return (
            <div className="Adventures">
                <div className="Adventures_header">
                    <ul className="Adventures_list">
                        <li className="Adventures_list_item"><a className="Adventures_name" href="/#/home">Home</a></li>
                        <li className="Adventures_list_item"><a className="Adventures_name" href="/#/Adventures">Adventures</a></li>
                        <li className="Adventures_list_item"><a className="Adventures_name" href="/#/private">Map</a></li>
                        {/* <li className="Adventures_list_item"><a className="Adventures_name" href={process.env.REACT_APP_LOGOUT}>Logout</a></li> */}
                    </ul>
                    <ul className="Adventures_list">
                        <span><a className="Adventures_name">{userData.user_name ? userData.user_name : null}</a></span>
                        {
                            userData.img ?
                                <img className='avatar' src={userData.img} /> :
                                null
                        }
                        <li className="Adventures_list_item"><a className="Adventures_name" href={process.env.REACT_APP_LOGOUT}>Logout</a></li>
                    </ul>
                </div>
                <div>
                    <button className="button-adv" onClick={() => this.pageLoad()}>Show all</button>
                </div>
                <div className="Adventures_body">
                    {newAdv}
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
        details: state.details,
        userData: state.user
    };
}
export default connect(mapStateToProps, { getLocation, getDate, getTitle, getDetails, getUser })(Adventures);