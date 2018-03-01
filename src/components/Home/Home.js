import React, { Component } from 'react';
import './Home.css';
import { getUser } from './../../ducks/reducer';
import Modal from '../Modal/Modal'
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            working: false
        }
        this.handleModal = this.handleModal.bind(this);
    }
    componentDidMount() {
        this.props.getUser();
    }

    handleModal() {
        this.setState({
            working: !this.state.working
        })
    }

    render() {
        let { userData } = this.props;
        return (
            <div className="Home">
                <div className="Home_header">
                    <ul className="Home_list">
                        <li className="Home_list_item"><a className="Home_name" href="/#/home">Home</a></li>
                        <li className="Home_list_item"><a className="Home_name" href="/#/Adventures">Adventures</a></li>
                        <li className="Home_list_item"><a className="Home_name" href="/#/private">Map</a></li>
                    </ul>
                    <ul className="Home_list">
                        <span><a className="Home_name1" >{userData.user_name ? userData.user_name : null}</a></span>
                        {
                            userData.img ?
                                <img className='avatar' src={userData.img} /> :
                                null
                        }
                        <li className="Home_list_item"><a className="Home_name" href={process.env.REACT_APP_LOGOUT}>Logout</a></li>
                    </ul>
                </div>
                <div className="Home_title">
                        <h1>ADVENTURES MAP</h1>
                </div>
                <div className="button-box">
                    <button className="btnadd" onClick={this.handleModal}>ADD YOUR ADVENTURE</button>
                </div>
                <Modal modal={this.state.working} back={this.handleModal}></Modal>
            </div>
        )
    }
}
function mapsStateToProps(state) {
    return {
        userData: state.user
    }
}
export default connect(mapsStateToProps, { getUser })(Home);