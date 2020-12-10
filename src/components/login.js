import React, { useState, useEffect , Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';
import { login } from './userfunction'


class Login extends Component {
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const user = {
          email: '',
          password: ''
        }
    
        login(user).then(res => {
          if (res) {
            this.props.history.push('/home')
          }
        })
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
                            value={this.email}
                            onChange={this.onChange} /> 
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
                            onChange={this.onChange} />
                            </div>
                    </Col>
                </FormGroup>
                <Button className="btn_login"> Login</Button>
            </Form>
        </div>
        </div>
    );
    }
}

export default Login;
