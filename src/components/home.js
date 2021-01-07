import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, Link } from 'react-router-dom'
import {
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import store from '../store';
import { isAuth } from '../actions/authAction'
import {Redirect} from 'react-router-dom'


var divStyle = {
color:'black'
};

export class HomePage extends Component {

  componentDidMount() {
    // Check if session cookie is present
    store.dispatch(isAuth());
  }

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  render() {

    if(this.props.isAuthenticated) {
      return <Redirect to="/profile" />
    }

    return (
       <div className="container">
        <div className="main">
          <h1 style={divStyle}> <strong>MERN</strong> Sessions Auth App </h1>
          <br/>
            <h5 style={divStyle}>Minimalistic Sessions based Authentication app <span role="img" aria-label="lock">🔒 </span><br></br>Built with React + Redux, NodeJS, Express, MongoDB and Bootstrap</h5>
            <h5 style={divStyle}>Uses Cookies <span role="img" aria-label="lock">🍪 </span></h5>
          <br/>
          <div>

            

             { <Link className='divStyle' to="/login">
               <Button size="lg"  color="light">Sign In</Button>
               </Link>}

             { <Link className='divStyle' to="/register">
               <Button  size="lg"  color="light">Register</Button>
             </Link>}

          </div>
        </div>
    </div>
    )
  }
}
const mapStateToProps = (state) => ({ //Maps state to redux store as props
  
  isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps)(HomePage);