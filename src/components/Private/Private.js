import React, {Component} from 'react';
import './Private.css'
// import axios from 'axios'
import {connect} from 'react-redux';
import {getUser} from './../../ducks/reducer';
import MapContainer from '../Map/MapContainer';

class Private extends Component {
    componentDidMount(){
        this.props.getUser();
    }

    render(){
        let {userData} = this.props;
        return (
            <div className="Private">
                <nav className="Private_nav"> 
                   <ul className="Private_list">
                       <li className="Private_list_item"><a className="Private_name" href="#">Home</a></li>
                       <li className="Private_list_item" ><a className="Private_name" href="#">About</a></li>
                          <li className="Private_list_item"><a className="Private_name" href="#">Blog</a></li>
                       <span><a className="Private_name" href="#">{ userData.user_name ? userData.user_name : null }</a></span>
                       {
                    userData.img ? 
                    <img className='avatar' src= {userData.img}/> :
                    null
                }
                       <li className="Private_list_item"><a className="Private_name" href='http://localhost:3005/logout'>Logout</a></li>
                   </ul>
               </nav>
               <MapContainer></MapContainer>
                
            </div>
        )
    }
}
function mapsStateToProps(state){
    return {
    
        userData: state.user
    
    }
}

export default connect(mapsStateToProps, { getUser })(Private);