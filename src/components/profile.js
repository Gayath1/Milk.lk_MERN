import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {
  Button,
  Card,
 CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import Header from '../components/header';

import { useHistory , Link} from 'react-router-dom'

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
 

 
  
  

  
   
    return (
      <div>
      <Header />
      
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