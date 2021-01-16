import React, { useState, useEffect , Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Col, Button,  Alert } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import { connect } from "react-redux"; // API to connect component state to redux store
import { login } from "../actions/authAction";
import { isAuth } from '../actions/authAction'
import store from '../store';
import {Redirect} from 'react-router-dom'
import PropTypes from "prop-types";
import { returnStatus } from "../actions/statusActions";
import './login.css';


class Login extends Component {

  
  static propTypes = {
    button: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
  };
  state = {
    email: "",
    password: "",
    msg: "",
    err: ""
  }

  

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    status: PropTypes.object.isRequired,
    loading: PropTypes.bool
  };

 

componentDidUpdate(prevProps) {
      const status = this.props.status;

     if (status !== prevProps.status) {

      if (status.id === "LOGIN_FAIL") {
        this.setState({ msg: status.statusMsg });
      }
    }
};


onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

onSubmit = (e) => {
    e.preventDefault();

    const { email, password} = this.state;

    const user = { email, password};
    
    this.props.login(user);
    
  };

  
   
render(){
  
  
  if(this.props.isAuthenticated) {
    return <Redirect to="/profile" />
  }
  
  
    return (
       <div className="body">
         
         <h2>Login</h2><br/> 
         <div class="login"> 
       
        <br/>
                {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
               
                <FormGroup row>
                    <Col>
                        <div className="uname">
                        <Input
                            
                            placeholder = "your Email"
                            type="Email"
                            name="email"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChange}
                            /> 
                            </div>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Col>
                    <div className="pass">
                        <Input
                            placeholder = "Your password"
                            type="password"
                            name="password"
                            required
                            
                            className="form-control"
                            value={this.password}
                            onChange={this.onChange} 
                              />
                        
                            </div>
                    </Col>
                </FormGroup>
                <Button className="log" type="submit" value="Submit" > Login</Button>
                
            </Form>
            <br/>
            <a>Don't have an account?<Link to="/register">Register</Link></a>
        </div>
        
        </div>
    );
    
    }
}





const mapStateToProps = (state) => ({ 
 
  isAuthenticated: state.auth.isAuthenticated,
  status: state.status,
  
});

export default connect(mapStateToProps,{ login})(Login);