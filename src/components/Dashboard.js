import React, { Component } from 'react';

export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/api/Dashboard')
      .then(res => res.text())
      .then(res => this.setState({message: "Welcome"}));
  
}

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
      </div>
    );
  }
}