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
        this.props.history.push('/login');
        
      } 
      
    })
    .catch(err => {
      console.error(err);
      alert('Error logout in please try again');
    })
  );

 

  componentDidMount() {
    fetch('/api/Dashboard')
      .then(res => res.text())
      .then(res => this.setState({message: "Welcome"}));
    
  
}



  render() {
    return (
      <div>
        <p>{this.state.message}</p>
       
        <Button className="btn_login" type="submit" value="Submit" onClick={this.logout}> Log Out</Button>
      </div>
    );
  }
}