import React, { Component } from 'react';
import './Stripe.css';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import{Link} from 'react-router-dom'

class Stripe extends Component {
  constructor(props){
    super(props)
    this.state={
      amount:0
    }
  }
    onToken = (token) => {
      console.log('token', token); // can check token for info, including user email
      token.card = void 0; // remove credit card info from token so it never hits server
      axios.post('/api/payment', { token, amount: this.state.amount } )
      // when the token is sent to use from Stripe, we make a post request to make the payment
      .then(response => { console.log('POST response', response); });
    }
    changeAmount(e){
      this.setState({
        amount:e*100
      })
    }
  
    render() {
      return (
        <div className="Stripe-box">
        <Link to='/'><img alt="" className="Exit-button" src="./exit.svg"/></Link>
        <h3>How much do you want to donate?</h3>
       <input className="currencyinput" placeholder="$" onChange={(e)=>{this.changeAmount(e.target.value)}}/>
          <StripeCheckout className="sc"
            token={this.onToken} // get token back
            stripeKey={ process.env.REACT_APP_STRIPEKEY }  // public key 
            amount={this.state.amount} // required, should be same as in axios get request
          />
        </div>
      );
    }
  }
  
  export default Stripe;