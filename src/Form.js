import React from "react";
import "./styles.css";
import { Button, TextField, Checkbox } from "@material-ui/core";
import Toggle from './Toggle';
import Modal from './Modal';
import Home from './Home';
import axios from 'axios';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      showModal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
    
  }




  handleInputs = () => {
    this.setState({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
    });
    

    
  };

  handleSubmit = () =>{
  const transferData = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    email: this.state.email
  }

    axios({
      method: 'post',
      url: 'api/sendMail',
      data: transferData
    }).then((response)=>{
      if(response.data.status === 'success'){
        this.setState({showModal: true})
        this.resetForm();
      }else if(response.data.status === 'fail'){
        alert('Message failed to send. Please try again.'); 
      }
    })
  }



  handleClear = ()=>{
    window.location = "/";
    this.setState({firstName: '', lastName: '', email: ''})
  }



  render() {

    return (
      <React.Fragment>
        <div className="App">
          <div id="leftImage" />
          <form
            id="signInForm"
            action="https://localhost:3002/api/sendMail"
            name="myForm"
            onSubmit={this.handleSubmit}
            onChange={this.handleInputs}
            className="form"
          >


            <i className="fas fa-3x fa-user" />
            <h1 style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              Sign Up
            </h1>

            <div style={{ margin: "10px" }}>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                style={{ width: "400px" }}
                value={firstName}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField
                id="lastName"
                label="Last Name"
                style={{ width: "400px" }}
                variant="outlined"
                value={lastName}
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                style={{ width: "400px" }}
                value={email}
              />          
            </div>
                
                
                <Checkbox color="primary" required /><label>Agree To Terms & Conditions</label>

                &nbsp;


                {/* Modal Toggled Window */}

              <Toggle render={({on,toggle})=>(
                
                <div>
                    { on && <Modal handleClear={this.handleClear} toggle={toggle} email={this.state.email} firstName={this.state.firstName} /> }
        
                          <Button onClick={toggle} variant="contained" color="primary">
                            Sign Up
                          </Button>

                </div>

                      )}
                      
              />
                          
          </form>

    
<Home />

        </div>








      </React.Fragment>
    );
  }
}
