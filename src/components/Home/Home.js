import React, { Component } from 'react';
import './Home.css';
// import MapContainer from '../Map/MapContainer'
import Modal from '../Modal/Modal'

export default class Home extends Component {
    constructor() {
        super()
        this.state = {

            working: false
        }
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal() {
        this.setState({
            working: !this.state.working
        })
    }
    render() {
        return (
            <div className="Home">
                <nav className="Home_nav">
                    <ul className="Home_list">
                        <button className="btnadd" onClick={this.handleModal} href="">+ ADD</button>
                        <li className="Home_list_item"><a className="Home_name" href="#">Home</a></li>
                        <li className="Home_list_item"><a className="Home_name" href="#">About</a></li>
                        <li className="Home_list_item"><a className="Home_name" href="#">Blog</a></li>
                        <li className="Home_list_item"><a className="Home_name" href={process.env.REACT_APP_LOGIN}>Login</a></li>
                    </ul>
                </nav>
                {/* <MapContainer></MapContainer> */}
              <Modal modal={this.state.working}></Modal>
                    
    


            </div>
        )
    }
}