import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from "axios"
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {
  Button,
  Card,
 CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import PropTypes from "prop-types";
import { Redirect, useHistory , Link} from 'react-router-dom'
import { logout} from '../actions/authAction';
import store from '../store';
import { isAuth } from '../actions/authAction'
import AuthService from '../auth';
import {  useContext , useEffect} from 'react';
import UserContext from '../userContext';
function Profile(){

 let {userData} = useContext(UserContext );
  const history = useHistory();
  useEffect(() => {
    if(userData.user)
        history.push("/profile");
    else if (userData.user == null)
        history.push("/login");
      }, []);
 

  const onLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  };
  
  

  
   
    return (
      <div>
      {userData.user ? (
        <>
          <h1>Welcome {userData.user.email}</h1>
          <br/>
        <Button size="lg" href='/updateuser' color="primary">Change Password</Button>

          </>
      ) : (
          <>
              <h2>You are not logged in</h2>
              <Link to="/login">Login</Link>
          </>
      )}
  </div>
       
    )
  }




export default Profile;