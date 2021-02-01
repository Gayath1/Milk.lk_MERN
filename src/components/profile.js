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
        <div className="profileframe">
          <h1>Welcome {userData.user.email}</h1>
          
          
          <br/>
        <Button size="lg" href='/updateuser' color="primary">Change Password</Button>
</div>
          </>
      ) : (
          <>
          <div className="profileframe2">
              <h2>You are not logged in</h2>
              <Link to="/login" className="loginprofile">Login</Link>
              </div>
          </>
      )}{userData.role ?(
        <>
        <div className="profileframe1">
        <Button size="lg" href='/list' color="primary">Admin panel</Button>
        </div>
          </>

      ) : (
        <>
              
          </>

      )
      }
  </div>
       
    )
  }




export default Profile;