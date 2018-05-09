// import axios from 'axios'
import React, { Component } from 'react';
import './Modal3.css'
import { connect } from 'react-redux';
import { getDetails } from '../../ducks/reducer';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />

class Modal3 extends Component {
    render() {
        return (
            <div>
                <Desktop>
                    <div className="Modal3_body-d">
                        <div className="Details-Title-d">Details of your story:</div>
                        <textarea onChange={(e) => this.props.getDetails(e.target.value)} placeholder="Your story here ..." className="input3-d" />
                    </div>
                </Desktop>
                <Tablet>
                <div className="Modal3_body-t">
                        <div className="Details-Title-t">Details of your story:</div>
                        <textarea onChange={(e) => this.props.getDetails(e.target.value)} placeholder="Your story here ..." className="input3-t" />
                    </div>
                </Tablet>
            </div>

        )
    }
}
function mapStateToProps(state) {
    const { details } = state;
    return {
        details
    }
}
export default connect(mapStateToProps, { getDetails })(Modal3);
