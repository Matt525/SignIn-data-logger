import React from 'react';
import "./styles.css";
import { Button, TextField, Checkbox } from "@material-ui/core";
import Toggle from './Toggle';
import Modal from './Modal';
import $ from 'jquery';
export default class Form extends React.Component{
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
          email: document.getElementById("email").value
        });
        
    
        
      };

      // Prevents form from reloading upon submit

      noReload=()=>{
          document.getElementById('signInForm').addEventListener('submit',(event)=>{
              event.preventDefault();
          })
      }

    
    
        handleSubmit = () =>{
                            
                            const transferData = {
                            firstName: this.state.firstName,
                            lastName: this.state.lastName,
                            email: this.state.email
                            }
                         
                            

            $.post('/sendMail',transferData,()=>{console.log("POST Received")})
      }
        
                            handleClear = ()=>{
                                window.location = "/";
                            }



    render(){
        return(
            <React.Fragment>
            <div className="App">
              <div id="leftImage" />
              <form
                id="signInForm"
                name="myForm"
                onSubmit={this.handleSubmit}
                onChange={this.handleInputs}
                className="form"
                onClick={this.noReload}
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
                    
                    
                    <Checkbox id="checkBox" color="primary" required /><label>Agree To <a href="/terms">Privacy Policy</a></label>
    
                    &nbsp;
    
    



                    {/* Modal Toggled Window */}
    
                  <Toggle render={({on,toggle})=>(
                    
                 
                    <div>
                      
                      
                     
                      
                        { on && <Modal id="theModal" handleClear={this.handleClear} toggle={toggle} email={this.state.email} firstName={this.state.firstName} /> }
            
                              <Button id="submitButton" type="submit" onClick={toggle} variant="contained" color="primary">
                                Sign Up
                              </Button>
    
                    </div>
    
                          )}
                          
                  />
                              
              </form>
    
            </div>
    
          </React.Fragment>
        )
    }
}
