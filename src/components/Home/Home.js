import React, { Component } from 'react';
import './Home.css';
import Modal from '../Modal/Modal';
import { getUser } from './../../ducks/reducer';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={1} maxWidth={991} />


class Home extends Component {
    constructor(props) {
        super(props)

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

    loginPage(e){
        this.props.history.push('/login');
    }

    render() {
        let{userData} = this.props;
        return (
            <div>
                <Desktop>
                    <div className={this.state.working ? "Home-open-d" : "Home-d"}>
                        <Header></Header>
                        <img className="Home_logo-d" alt="" src="./logo1.png" />
                        {userData.user_name
                        ?
                        <button className="btnadd-d" onClick={this.handleModal}>ADD AN ADVENTURE</button>
                        :
                       <button onClick={e=>this.loginPage(e)} className="loginadd-d">LOG IN TO POST YOUR ADVENTURE</button>
                    }
                        <Link to="/donations"> <img alt="" className="Donation-button-d" src="./coin.svg" /></Link>
                    </div>
                    <Modal modal={this.state.working} back={this.handleModal}></Modal>
                </Desktop>

                <Tablet>
                <div className={this.state.working ? "Home-open-t" : "Home-t"}>
                        <Header></Header>
                        <img className="Home_logo-t" alt="" src="./logo1.png" />
                        {userData.user_name
                        ?
                        <button className="btnadd-t" onClick={this.handleModal}>ADD AN ADVENTURE</button>
                        :
                       <button onClick={e=>this.loginPage(e)} className="loginadd-t">LOG IN TO POST YOUR ADVENTURE</button>
                    }
                        <Link to="/donations"> <img alt="" className="Donation-button-t" src="./coin.svg" /></Link>
                    </div>
                    <Modal modal={this.state.working} back={this.handleModal}></Modal>
                </Tablet>
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