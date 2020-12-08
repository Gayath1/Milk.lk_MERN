import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const Createuser = (props) => {
    const [data, setData] = useState({
        
        user_email: "",
        user_password: "",
        
    });

    const onChangeuserData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmituserData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/data/register', data).then(res => console.log(res.data));
        setData({
            
            user_email: "",
            user_password: "",
        });
    }

    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">MILK.LK register</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/list" className="nav-link">List Product</Link>
              </li>
              
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Product</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Add user</h3>
            <Form onSubmit={onSubmituserData}>
               
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> email </Label>
                        <Input
                            type="text"
                            name="user_email"
                            className="form-control"
                            value={data.user_email}
                            onChange={onChangeuserData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> password</Label>
                        <Input
                            type="text"
                            name="user_password"
                            className="form-control"
                            value={data.user_password}
                            onChange={onChangeuserData} />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
        </div>
    );
}

export default Createuser;