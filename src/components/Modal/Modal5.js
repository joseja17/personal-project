import axios from 'axios'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Modal5.css'
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />

class Modal5 extends Component {
    constructor(props) {
        super(props)
        this.newAdventure = this.newAdventure.bind(this);
    }

    newAdventure() {
        console.log(this.props)
        let data = this.props
        axios.post('/api/adventures', data).then(resp => {
            console.log(resp)
        })
    }

    gettingAdv() {
        axios.get().then(resp => {

        })
    }



    render() {
        console.log(this.props);
        return (
            <div>
                <Desktop>
                    <div>
                        <h1 className="submit-d">Ready to share your adventure?</h1>
                        <Link to="/Adventures">
                            <button className="btn-post-d" onClick={this.newAdventure}>Post Adventure</button>
                        </Link>
                    </div>
                </Desktop>
                <Tablet>
                    <div>
                        <h1 className="submit-t">Ready to share your adventure?</h1>
                        <Link to="/Adventures">
                            <button className="btn-post-t" onClick={this.newAdventure}>Post Adventure</button>
                        </Link>
                    </div>
                </Tablet>
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
        images: state.images,
        latitud: state.latitud,
        longitud: state.longitud
    };
}


export default connect(mapStateToProps, null)(Modal5);