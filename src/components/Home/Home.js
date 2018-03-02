import React, { Component } from 'react';
import './Home.css';
import Modal from '../Modal/Modal';
import Header from '../Header/Header'

class Home extends Component {
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
                <Header></Header>
              
                    <img className="Home_logo" src="./logo1.png"/>
            
                <div className="button-box">
                    <button className="btnadd" onClick={this.handleModal}>ADD YOUR ADVENTURE</button>
                </div>
                <Modal modal={this.state.working} back={this.handleModal}></Modal>
            </div>
        )
    }
}
export default Home;