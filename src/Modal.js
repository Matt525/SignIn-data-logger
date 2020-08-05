import React from 'react';
import './Modal.css';
import { Button } from '@material-ui/core';


export default class Modal extends React.Component{ 
  
render(){

  return(
    <div className="container">
          <div className="window">
          <h1>Thank You For Signing Up, {this.props.firstName}</h1>

          <p>We have sent an email confirmation to you at {this.props.email}. Thank you for using my Sign Up & Emailer application demo!</p>
          <Button onClick={this.props.handleClear} variant="contained" color="primary">Back To Sign Up</Button>
      </div>
    </div>
  )
}
}

