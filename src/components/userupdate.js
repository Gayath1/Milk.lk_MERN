import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios";
import {Redirect} from 'react-router-dom'
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
        // if(res.status === 200){
         // this.props.history.push('/profile');
       //  }
      }
      )
      .catch((err) => {
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
                            required
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