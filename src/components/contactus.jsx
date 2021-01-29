import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Header from '../components/header';
import { Form, FormGroup, Label, Input, Col, Button,  Alert } from 'reactstrap';


const Store = () => {
    
    return (
      <div className="store">
      <Header />
      
      
      
            <div className="contactform">
            <Form  className="contactform1">
            <FormGroup row>
                    <Col>
                        <div className="uname1">
                        <Input
                            
                            placeholder = "your Name"
                            type="text"
                            name="name"
                            required
                            className="form-control"
                            
                          
                            /> 
                            </div>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Col>
                        <div className="uname1">
                        <Input
                            
                            placeholder = "your Email"
                            type="Email"
                            name="email"
                            required
                            className="form-control"
                            
                          
                            /> 
                            </div>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Col>
                    <div className="uname1">
                        <Input
                            placeholder = "Your mobile"
                            type="mobile"
                            name="mobile"
                            required
                            
                            className="form-control"
                           
                            
                              />
                        
                            </div>
                    </Col>
                </FormGroup>
                <br/>
                <FormGroup row>
                    <Col>
                    <div className="pass1">
                        <textarea
                            placeholder = "Comment"
                            type="text"
                            name="comment"
                            required
                            
                            className="form-control"
                           
                            
                              />
                        
                            </div>
                    </Col>
                </FormGroup>
                <br/><br/>
                <div className="btncontact">
                <Button className="log1" type="submit" value="Submit" >Submit</Button>
                </div>
            </Form>

               
           
        </div>
        
        <div className="company">
            <div className="company details">
            <a>📍   No: 310, High Level Road, Nawinna, Maharagama.</a>
            </div>
        </div>
        
        </div>

        
    );
}

export default Store;