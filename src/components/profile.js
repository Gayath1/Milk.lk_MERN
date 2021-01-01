import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

export default class Dashboard extends React.Component {
     state = {
        user: []
      };
   
      constructor(props) {
        super(props)
        this.state = {
          email : '',
          password: ''
        };
      }
    

     onSubmitProductData = (e) => {
     //   e.preventDefault();
    //    axios.post(`http://localhost:4000/api/updateprofile/${props.match.params.email}`, data).then(res => console.log(res.data));
    //    props.history.push('/');


    
    }

      logout = (e) => (dispatch) => {
      axios
      .post("/api/logout")
      .then(res => {
        if(res.status === 200){
          this.props.history.push('/login');
        }
        
    })

      
      .catch((err) => {
        console.log(err);
      });
  
  }

     componentDidMount(){
        axios.post('https://localhost:4000/api/Dashboard').then(res => {
            console.log(res);
            this.setState({user:res.data});
        })
    }
       
    
render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Edit Product</h3>
            <Form onSubmit={this.onSubmitProductData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> user email </Label>
                        <Input
                            type="text"
                            name="product_name"
                            className="form-control"
                            //value={this.state.email}
                            onChange={this.onChangeProductData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> password </Label>
                        <Input
                            type="text"
                            name="product_brand"
                            className="form-control"
                            //value={this.state.password}
                            onChange={this.onChangeProductData} />
                    </Col>
                </FormGroup>
              
              
                <Button color="primary"><AiOutlineForward /> Update Data</Button>
                <Button className="btn_login" type="submit" value="Submit" onClick={this.logout}> Logout</Button>
            </Form>
        </div>
    );
}
}
