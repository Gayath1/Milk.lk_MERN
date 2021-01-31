import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Header from '../components/header';
import { Form, FormGroup, Label, Input, Col, Button,  Alert } from 'reactstrap';
import  image from '../images/Allura Walking Around.png';
import Iframe from 'react-iframe';
const Store = () => {
    
    return (
      <div className="store">
      <Header />
      
      
      <div class="row" style={{width:'100%'}}>
      
     
  <div class="col ">
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
        </div>
        <div class="col">
        <div className="company">
            <div className="companydetails">
            <a>📍   No: 194/24, Magalegoda, Veyangoda, Srilanka.</a><br/>
            <a>📞 Phone: 071 151 27 75 </a><br/>
            <a>📧 Email: chandulagayan@gmail.com</a><br/>
            <a>🕐 Support 24/7/365</a><br/>
            <img  className="imgcontact" src={image}  alt="imageslide"/>
            </div>
        </div>
        </div>
      
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.866721365074!2d80.03383615082237!3d7.141406817626173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fda565c1a6df%3A0xe2443501aa51084f!2sHighland%20Milk%20Bar%20-%20Magalegoda!5e0!3m2!1sen!2slk!4v1611913026083!5m2!1sen!2slk" />
        </div>
        </div>

        
    );
}

export default Store;