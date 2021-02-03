import React, { useState, useEffect, Component } from 'react';
import { Link,useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';
import './login.css';



class register extends Component {
    constructor(props) {
      super(props)
      this.state = {
        email : '',
        password: ''
      };
    }
    handleInputChange = (event) => {
      const { value, name } = event.target;
      this.setState({
        [name]: value
      });
    }
    onSubmit = (event) => {
      event.preventDefault();
      fetch('https://milklk.herokuapp.com/api/register', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        if (res.status === 201) {
          this.props.history.push('/login');
        } if (res.status === 404) {
          alert('An account with this email already exists');
        }
        
      })
      .catch(err => {
        console.error(err);
        alert('Error please try again');
      });
    }
  /*componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }
  
  componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard"); 
      }
      
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  */
    onChangeuserData = e => {
      this.setState({[e.target.id]:e.target.value})
  }
  
  onSubmituserData = e => {
      e.preventDefault();
  
      const userData = {
          email:this.email,
          password:this.password,
      }
      this.props.loginUser(userData);
  }
      
     /* const [data, setData] = useState({
          
          email: "",
          password: "",
          
      });
  
      const onChangeuserData = (e) => {
          setData({
              ...data,
              [e.target.name]: e.target.value
          })
      }
  
      const onSubmituserData = (e) => {
          e.preventDefault();
          axios.post('http://localhost:4000/api/login', data).then(res => console.log(res.data));
          setData({
              
              email: "",
              password: "",
          });*/
          
      
  render(){
    
      return (
         <div className="body">
           
           <h2 className="logintitle">Create account</h2>
      
           
          <div class="login">
              
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
                              onChange={this.handleInputChange}
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
                              onChange={this.handleInputChange} 
                                />
                          
                              </div>
                      </Col>
                  </FormGroup>
                  <Button className="log" type="submit" value="Submit"> Sign up</Button>
              </Form>
              <br/>
            <a>Have an account?<Link to="/login">Login</Link></a>
          </div>
          </div>
      );
      }
  }
  
  
  export default register;
  