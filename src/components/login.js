import React, { useState, useEffect , useContext , Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
import UserContext from '../userContext';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();
  
  


const onChangeEmail = (e) => {
  setEmail({ [e.target.name]: e.target.value });
  };
  const onChangePassword = (e) => {
    setPassword({ [e.target.name]: e.target.value });
    };
  


  const submit = async (e) => {
    e.preventDefault();
    try{
      const body = {email, password};
        const loginResponse = await axios.post("http://localhost:4000/api/login", body);
        setUserData({
            token: loginResponse.data.token,
            user: loginResponse.data.user,
            role : loginResponse.data.role,
            
        });
        localStorage.setItem("Token", loginResponse.data.token);
        history.push("/profile");
    } catch(err) {
        err.response.data.msg && setErr(err.response.data.msg)
    }
    
};

  
   

    return (
       <div className="body">
         
         <h2>Login</h2><br/> 
         <div class="login"> 
       
        <br/>
                {err ? (
              <Alert color="danger">{err}</Alert>
            ) : null}
            <Form onSubmit={submit}>
               
                <FormGroup row>
                    <Col>
                        <div className="uname">
                        <Input
                            
                            placeholder = "your Email"
                            type="Email"
                            name="email"
                            required
                            className="form-control"
                            
                            onChange={onChangeEmail}
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
                           
                            onChange={onChangePassword}
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







export default Login;