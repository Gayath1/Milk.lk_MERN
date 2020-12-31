
import React, { Component } from 'react';
import {  Button } from 'reactstrap';


export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }
 
  logout = () => (
    fetch("/api/logout")
    .then(res => {
      if (res.status === 200) {
        localStorage.removeItem("token");
        this.props.history.push('/login');
        res.json();
        
      } 
      
    })
    .catch(err => {
      console.error(err);
      alert('Error logout in please try again');
    })
  );

 

  componentDidMount() {
    fetch('http://localhost:4000/api/Dashboard')
    .then(res => {

      
      
    
    })
    
}



  render() {
   
    return (
      <div>
        <h1>Welcome</h1>
      
       
        <Button className="btn_login" type="submit" value="Submit" onClick={this.logout}> Log Out</Button>
      </div>
    );
  }
}