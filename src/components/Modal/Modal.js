// import axios from 'axios'
import React, { Component } from 'react';
import './Modal.css'
import Modal1 from './Modal1'
import Modal2 from './Modal2'
import Modal3 from './Modal3'
import Modal4 from './Modal4'
import Modal5 from './Modal5'
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            whichModalIsOpen: 1
        }
    }

    handleModal(num) {
        this.setState({
            whichModalIsOpen: num
        })
    }

    render() {
        console.log("THIS IS THIS.PROPS", this.props);
        return (

            <div>
                <Desktop>
                    <div className={this.props.modal ? "modal-d" : "modal-hidden-d"} >
                        <header className="head-d">
                            <button onClick={this.props.back} className="Modal_close_button-d"><img alt="" className="Back_button-d" src="./left-arrow.svg" /></button>
                            SHARE YOUR ADVENTURE
                        </header>
                        <ul className="Modal_list-d">
                            <li className="Modal_list_item-d" onClick={() => this.handleModal(1)}>Title</li>
                            <li className="Modal_list_item-d" onClick={() => this.handleModal(2)}>Location</li>
                            <li className="Modal_list_item-d" onClick={() => this.handleModal(3)}>Details</li>
                            <li className="Modal_list_item-d" onClick={() => this.handleModal(4)}>Images</li>
                            <li className="Modal_list_item-d" onClick={() => this.handleModal(5)} >Submit</li>
                        </ul>
                        <div className="line-d"><hr /></div>
                        <div className="Modal_body-d">
                            {this.state.whichModalIsOpen === 1 ?
                                <Modal2 />
                                :
                                null
                            }
                            {this.state.whichModalIsOpen === 2 ?
                                <Modal1 />
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
                </Desktop>
                <Tablet>
                <div className={this.props.modal ? "modal-t" : "modal-hidden-t"} >
                        <header className="head-t">
                            <button onClick={this.props.back} className="Modal_close_button-t"><img alt="" className="Back_button-t" src="./left-arrow.svg" /></button>
                            SHARE YOUR ADVENTURE
                        </header>
                        <ul className="Modal_list-t">
                            <li className="Modal_list_item-t" onClick={() => this.handleModal(1)}>Title</li>
                            <li className="Modal_list_item-t" onClick={() => this.handleModal(2)}>Location</li>
                            <li className="Modal_list_item-t" onClick={() => this.handleModal(3)}>Details</li>
                            <li className="Modal_list_item-t" onClick={() => this.handleModal(4)}>Images</li>
                            <li className="Modal_list_item-t" onClick={() => this.handleModal(5)} >Submit</li>
                        </ul>
                        <div className="line-t"><hr /></div>
                        <div className="Modal_body-t">
                            {this.state.whichModalIsOpen === 1 ?
                                <Modal2 />
                                :
                                null
                            }
                            {this.state.whichModalIsOpen === 2 ?
                                <Modal1 />
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


                </Tablet>
            </div>
        )
    }
}



//axios.post