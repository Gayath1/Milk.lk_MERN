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
         
                <Link to="/list" className="cols12">Create Account</Link>
    
              
        
         
        <div style={{ marginTop: 10 }}>
            
            <Form onSubmit={onSubmituserData}>
               
                <FormGroup row>
                    <Col>
                        
                        <Input 
                            
                            placeholder = "your Email"
                            type="text"
                            name="email"
                            className="input-fieldcols12"
                            value={data.email}
                            onChange={onChangeuserData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        
                        <Input
                            placeholder = "Your password"
                            type="text"
                            name="password"
                            className="input-fieldcols12"
                            value={data.password}
                            onChange={onChangeuserData} />
                    </Col>
                </FormGroup>
                <Button className="btn_login"> Signup</Button>
            </Form>
        </div>
        </div>
    );
}

export default Createuser;
