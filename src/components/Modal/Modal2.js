import React, { Component } from 'react';
import './Modal2.css'
import { connect } from 'react-redux';
import { getTitle, getDate } from '../../ducks/reducer';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />

class Modal2 extends Component {

    render() {
        return (
            <div>
                <Desktop>
                    <div className="Modal2_body-d">
                        <div className="Title_Title-d">Title:</div>
                        <input
                            className="inputModal2_Title-d"
                            onChange={(e) => this.props.getTitle(e.target.value)} />
                        <div className="Date_Title-d">Date:</div>
                        <input
                            className="inputModal2_Date-d"
                            onChange={(e) => this.props.getDate(e.target.value)}
                            type="date" />
                    </div>
                </Desktop>

                <Tablet>
                    <div className="Modal2_body-t">
                        <div className="Title_Title-t">Title:</div>
                        <input
                            className="inputModal2_Title-t"
                            onChange={(e) => this.props.getTitle(e.target.value)} />
                        <div className="Date_Title-t">Date:</div>
                        <input
                            className="inputModal2_Date-t"
                            onChange={(e) => this.props.getDate(e.target.value)}
                            type="date" />
                    </div>
                </Tablet>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { title, date } = state;
    return {
        title,
        date
    }
}
export default connect(mapStateToProps, { getTitle, getDate })(Modal2);