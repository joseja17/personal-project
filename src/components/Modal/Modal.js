// import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
import Modal5 from './Modal5'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = { whichModalIsOpen: 0
        }
    }
   

    handleModal(num) {
        this.setState({
            whichModalIsOpen: num
        })
    }


    render() {
        console.log("THIS IS THIS.PROPS",this.props);
        return (
            <div className={this.props.modal ? "modal" : "modal-hidden"} >
                    <header className="head">
                    <button  onClick={this.props.back} className="Modal_close_button"><img className="Back_button" src="./left-arrow.svg"/></button>
                        Share your story
                </header>
                        <ul className="Modal_list">
                            <li className="Modal_list_item"><a className="Modal_name" onClick={() => this.handleModal(1)}>Location</a></li>
                            <li className="Modal_list_item"><a className="Modal_name" onClick={() => this.handleModal(2)}>Title</a></li>
                            <li className="Modal_list_item"><a className="Modal_name" onClick={() => this.handleModal(3)}>Details</a></li>
                            <li className="Modal_list_item"><a className="Modal_name" onClick={() => this.handleModal(4)}>Images</a></li>
                            <li className="Modal_list_item"><a className="Modal_name" onClick={() => this.handleModal(5)} >Submit your story</a></li>
                        </ul>
                        <div className="line"><hr /></div>
                <div className="Modal_body">
                    {this.state.whichModalIsOpen === 1 ?
                        <Modal1 />
                        :
                        null
                    }
                    {this.state.whichModalIsOpen === 2 ?
                        <Modal2 />
                        :
                        null
                    }
                    {this.state.whichModalIsOpen === 3 ?
                        <Modal3 />
                        :
                        null
                    }
                    {this.state.whichModalIsOpen === 4 ?
                        <Modal4 />
                        :
                        null
                    }
                    {this.state.whichModalIsOpen === 5 ?
                        <Modal5 />
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}



//axios.post