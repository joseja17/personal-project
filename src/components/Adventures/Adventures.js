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
            adventures: [],
            personalAdv: [],
            pers: false,
            all: false, 
            always: true,
            on: true

        }
    }
    componentDidMount() {
        setTimeout(() => {
            axios.get('/api/adventures').then(resp => {
                console.log(resp)
                this.setState({
                    adventures: resp.data,
                    on: false
                })
            })
            
        }, 1050);
    }

    seeAll() {
        axios.get('/api/adventures').then(resp => {
            console.log(resp)
            this.setState({
                adventures: resp.data,
                all : !this.state.all,
                pers: false, 
                always: false
            })
        })
    }

    getAdv() {
 
        axios.get('/api/adventure/' + this.props.userData.id ).then(resp => {
            console.log(resp);
            this.setState({
               personalAdv: resp.data,
               pers: !this.state.pers,
               all: false, 
               always:false
            })
        })
    }
    // pageLoad() {
    //     window.location.reload(true)
    // }

    deleteAdv(id) {
        var r = window.confirm('Are you sure you want to delete this Adventure?');
        if (r === true){

            axios.delete('/api/adventures/' + id).then(resp => {
                this.setState({
                    personalAdv: resp.data
                })
                window.location.reload(true)
            })
        }
    }

    render() {
        let { userData } = this.props;
        let newAdv = this.state.adventures.map((val, i) => {
            return (
                <div key={i} className="Adventures_box">
                        <div>
                            <h2>{val.title}</h2>
                            <h4>{val.user_name}</h4>
                            <h6>{val.date}</h6>
                            <div>Location: {val.location} </div>
                            <p>{val.description}</p>
                        </div>
                </div>
            )
        })

        let persAdv = this.state.personalAdv.map((val, i) => {
            return (
                <div key={i} className="Adventures_box">
                
                        <div>
                            <h2>{val.title}</h2>
                            <h4>{val.user_name}</h4>
                            <h6>{val.date}</h6>
                            <div>Location: {val.location} </div>
                            <p>{val.description}</p>
                            <button className="Modal-delete-button" onClick={() => this.deleteAdv(val.id)}><img alt="" className="Delete-button" src="./delete.svg" /></button>
                            <Link to={'edit/'+val.id}><img className="Edit-button" alt="" src="./edit.svg"/></Link>
                        </div>
                       
                </div>
            )
        })

        return (
            <div className="Adventures">
                <Header></Header>
                <div>
                    {userData.user_name
                    ?
                    <div>
                        <button className="pers-btn" disabled={this.state.pers} onClick={()=>this.getAdv()}>SHOW MY OWN ADVENTURES</button>
                        <button className="all-btn" disabled={this.state.all} onClick={()=>this.seeAll()}>SHOW ALL ADVENTURES</button>
                    </div>
                        :
                        // <button className="all-btn" disabled={!this.state.on} onClick={() => this.pageLoad()}>SHOW ALL ADVENTURES</button>
                        null
                    }
                </div>
                {this.state.always
                ?
                <div className="Adventures_body">                
                    {newAdv}
                </div>
                    :
                    null

                }
                
                    {this.state.pers
                    ?
                <div className="Adventures_body">                
                    {persAdv}
                </div>
                    :
                    null
                    }
                    {this.state.all
                    ?
                    <div className="Adventures_body">                
                    {newAdv}
                </div>
                    :
                    null
                }
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