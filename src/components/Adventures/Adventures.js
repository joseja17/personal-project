import React, { Component } from 'react';
import './Adventures.css';
import { connect } from 'react-redux';
import { getLocation, getDate, getTitle, getDetails } from './../../ducks/reducer'
import axios from 'axios';
import Header from '../Header/Header'
import {Link} from 'react-router-dom'

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
        var r = window.confirm('Are you sure you want to delete this Adventure?');
        if (r === true){

            axios.delete('/api/adventures/' + id).then(resp => {
                this.setState({
                    adventures: resp.data
                })
            })
        }
    }

    render() {
        let { userData } = this.props;
        let newAdv = this.state.adventures.map((val, i) => {
            return (
                <div key={i} className="Adventures_box">
                    {userData.user_name
                        ?
                        <div>
                            <h2>{val.title}</h2>
                            <h4>{val.user_name}</h4>
                            <h6>{val.date}</h6>
                            <div>Location: {val.location} </div>
                            <p>{val.description}</p>
                            <button className="Modal-delete-button" onClick={() => this.deleteAdv(val.id)}><img alt="" className="Delete-button" src="./delete.svg" /></button>
                            <Link to={'edit/'+val.id}><img className="Edit-button" alt="" src="./edit.svg"/></Link>
                        </div>
                        :
                        <div>
                            <h2>{val.title}</h2>
                            <h4>{val.user_name}</h4>
                            <h6>{val.date}</h6>
                            <div>Location: {val.location} </div>
                            <p>{val.description}</p>
                        </div>

                    }
                </div>
            )
        })
        return (
            <div className="Adventures">
                <Header></Header>
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
export default connect(mapStateToProps, { getLocation, getDate, getTitle, getDetails })(Adventures);