import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {
  Button,
  Card,
 CardTitle,
  CardBody
} from "reactstrap";
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT_SUCCESS,
    IS_LOADING,
  } from "../actions/types";
  import { returnStatus } from "../actions/statusActions";





export class userupdate extends Component {

  
  constructor(props) {
    super(props)
    this.state = {
      
      password: ''
    };
  }


  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmitProductData=(e) =>{
    e.preventDefault();
  
      
      const token = JSON.parse(localStorage.getItem("Token"));

      const password= JSON.parse(JSON.stringify(this.state.password));
      const body = ({token, password});
      console.log(token);
      console.log(password);
      axios
      .post("/api/user/update",body,{
          headers: {
            "Content-Type":'application/json'
          },
         // body:{
         //   "token":token,
       //     "password":password
       //   }
          
      })
      .then((res) => {
       
      }
      )
      .catch((err) => {
       
      });

    
    
  }
  onSubmit = (event) => {
    const token = JSON.stringify(localStorage.getItem("Token"));
    const password = JSON.stringify(this.password)

    const reactData = [{ password: password}, {token:token}];
    
    //const body = JSON.stringify({token, password})
    
    event.preventDefault();
    
    fetch('http://localhost:4000/api/user/update',reactData, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            
            
          },
          
        
        
        
        
      })
      .then((response) => response.json())
    
    .catch(err => {
      console.error(err);
      alert('Error please try again');
    });
  }

  render() {
   
    return (
       <div className="container">
        
          <Card>
            <CardBody>
          <CardTitle><h1>{  'Welcome'} <span role="img" aria-label="party-popper">🎉 </span> </h1></CardTitle>
            </CardBody>
          </Card>
        
        <div style={{ marginTop: 10 }}>
        <Card>
            <h3> Change password</h3>
            <Form onSubmit={this.onSubmitProductData}>
                <FormGroup row>
                    <Col>
                        <Label>new password </Label>
                        <Input
                            type="password"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                             />
                    </Col>
                </FormGroup>
                
                <Button color="primary" type="submit" value="Submit"> Update password</Button>
            </Form>
        
        </Card>
        </div>
    </div>
    )
  }
}


export default (userupdate);