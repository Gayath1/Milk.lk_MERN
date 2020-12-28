import React, { useState, useEffect , Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';





class Login extends Component {
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
   loginUser = userData => dispatch => {
    axios
      .post("/api/login", userData)
      .then(res => {
        // Save to localStorage
  // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
      
      })
      .catch(err =>
        dispatch({
          payload: err.response.data
        })
      );
  };
  onSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/login', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
        
      }
      
    })
    
    .then(res => {
      if (res.status === 200) { 
        var token = res.json()
        console.log(token)
         localStorage.setItem('token', token)
        this.props.history.push('/Dashboard');
      } if (res.status === 404) {
        alert('Email not found');
      }if (res.status === 400) {
        alert('Password incorrect');
      }
      
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
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
       <div className="rectangle">
         
                <Link to="/list" className="cols12 text-center">Login</Link>
    
              
        
         
        <div style={{ marginTop: 10 }}>
            
            <Form onSubmit={this.onSubmit}>
               
                <FormGroup row>
                    <Col>
                        <div className="input-fieldcols12">
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
                    <div className="input-fieldcols12">
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
                <Button className="btn_login" type="submit" value="Submit" > Login</Button>
            </Form>
        </div>
        </div>
    );
    }
}


export default Login;
