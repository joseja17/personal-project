import React, { Component } from 'react';
import './Stripe.css';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
class Stripe extends Component {
    onToken = (token) => {
      console.log('token', token); // can check token for info, including user email
      token.card = void 0; // remove credit card info from token so it never hits server
      axios.post('/api/payment', { token, amount: 1000 } )
      // when the token is sent to use from Stripe, we make a post request to make the payment
      .then(response => { console.log('POST response', response); });
    }
  
    render() {
      return (
        <div className="Stripe-box">
            {/* <img src={logo} className="Stripe-logo" alt="logo" /> */}
          <StripeCheckout className="sc"
            token={this.onToken} // get token back
            stripeKey={ process.env.REACT_APP_STRIPEKEY }  // public key 
            amount={1000} // required, should be same as in axios get request
          />
        </div>
      );
    }
  }
  
  export default Stripe;