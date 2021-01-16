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
import { Redirect } from 'react-router-dom'
import { logout} from '../actions/authAction';
import store from '../store';
import { isAuth } from '../actions/authAction'
import AuthService from '../auth';
export class Profile extends Component {

  state = {
    email: "",
    id: "",
    
  }
 
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    authState: PropTypes.object.isRequired,
    
    logout: PropTypes.func.isRequired,

    
    
  };


  onLogout = (e) => {
    e.preventDefault();

    

    
    this.props.logout();
  };
  
  

  render() {
    if(!this.props.isAuthenticated) {
    return <Redirect to="/login" />
    }
    
    const {user} = this.props.authState;
    return (
       <div className="container">
        <div className="main">
          <Card>
            <CardBody>
          <CardTitle><h1>{ user ? `Welcome, ${user.sessUser.email}`: ''} <span role="img" aria-label="party-popper">🎉 </span> </h1></CardTitle>
          <br/>
           <CardSubtitle><h5> You are now Logged In <span role="img" aria-label="clap">👏 </span></h5></CardSubtitle>
          <br/>
        <Button size="lg" onClick={this.onLogout} color="primary">Logout</Button>
        <br/>
        <Button size="lg" href='/updateuser' color="primary">Change Password</Button>
        
        
            </CardBody>
          </Card>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => ({ //Maps state to redux store as props
  isAuthenticated: state.auth.isAuthenticated,
  authState: state.auth
});

export default connect(mapStateToProps, {logout})(Profile);