import React from "react";
import "./styles.css";
import { Button, TextField, Checkbox } from "@material-ui/core";
import Toggle from './Toggle';
import Modal from './Modal';
import Home from './Home';
export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      showModal: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.render = this.render.bind(this);
    
  }




  handleSubmit = () => {
    this.setState({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
    });
    console.log(this.state.firstName);
    
  };

  handleModal = () =>{
    this.state({
      showModal: true
    })
  }
  handleClear = ()=>{
    window.location = "/";
  }
  render() {

    return (
      <React.Fragment>
        <div className="App">
          <div id="leftImage" />
          <form
            id="signInForm"
            action="/info"
            name="myForm"
            onSubmit={this.handleModal}
            onChange={this.handleSubmit}
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
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField
                id="lastName"
                label="Last Name"
                style={{ width: "400px" }}
                variant="outlined"
              />
            </div>
            <div style={{ margin: "10px" }}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                style={{ width: "400px" }}
              />
            </div>

                
                
                <Checkbox color="primary" required /><label>Agree To Terms & Conditions</label>

                &nbsp;



                
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
