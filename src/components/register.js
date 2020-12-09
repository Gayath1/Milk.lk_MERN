import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';


const Createuser = (props) => {
    const [data, setData] = useState({
        
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
        axios.post('http://localhost:4000/api/register', data).then(res => console.log(res.data));
        setData({
            
            email: "",
            password: "",
        });
    }

    return (
       <div className="rectangle">
         
                <Link to="/list" className="cols12 text-center">Create Account</Link>
    
              
        
         
        <div style={{ marginTop: 10 }}>
            
            <Form onSubmit={onSubmituserData}>
               
                <FormGroup row>
                    <Col>
                        <div className="input-fieldcols12">
                        <Input
                            
                            placeholder = "your Email"
                            type="Email"
                            name="email"
                            required
                            className="form-control"
                            value={data.email}
                            onChange={onChangeuserData} /> 
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
                            value={data.password}
                            onChange={onChangeuserData} />
                            </div>
                    </Col>
                </FormGroup>
                <Button className="btn_login"> Signup</Button>
            </Form>
        </div>
        </div>
    );
}

export default Createuser;
