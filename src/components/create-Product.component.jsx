import React, { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from "axios";
import { useForm } from 'react-hook-form'
import UserContext from '../userContext';

const CreateProduct = (props) => {
    let {userData} = useContext(UserContext );
    const { register, handleSubmit, watch } = useForm()
    
    const [file, setFile] = useState("");
    const [product_name, setproduct_name] = useState("");
    const [product_brand, setproduct_brand] = useState("");
    const [product_category, setproduct_category] = useState("");
    const [product_price, setproduct_price] = useState("");

    const handlefile = (e) => {
        setFile(e.target.files[0]);
        
      };

    const onChangeProductData = (e) => {
        setproduct_name({ [e.target.name]: e.target.value});
        setproduct_brand({ [e.target.name]: e.target.value});
        setproduct_category({ [e.target.name]: e.target.value});
        setproduct_price({ [e.target.name]: e.target.value});
        setFile({ [e.target.name]: e.target.value});
        
    }

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("image", data.image[0])
        formData.append("product_name", product_name);
        formData.append("product_brand", product_brand);
        formData.append("product_category", product_category);
        formData.append("product_price", product_price);

    axios.defaults.baseURL = "http://localhost:4000";

    const headers = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
    };
    
    axios.post("/all_product/add", formData, headers)
    .then((res) => {
        if (res.status === 200) {
            alert('Product upload success');
        } 
    }).catch((err) => {
        console.error(err);
        alert('Error please try again');
    });
    };

    return (
        <div >
        {userData.role ? (
            <>
        <div className="store">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/list" className="navbar-brand">MILK.LK Admin</Link>
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
        </div>
        <div className="container">
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Product Name </Label>
                        <Input
                        ref={register}
                            type="text"
                            className="form-control"
                            value={product_name}
                            onChange={(e) => setproduct_name(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Brand </Label>
                        <Input
                        ref={register}
                            type="text"
                            className="form-control"
                            value={product_brand}
                            onChange={(e) => setproduct_brand(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Category </Label>
                        <Input
                        ref={register}
                            type="text"
                            className="form-control"
                            value={product_category}
                            onChange={(e) => setproduct_category(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Price </Label>
                        <Input
                        ref={register}
                            type="text"
                            className="form-control"
                            value={product_price}
                            onChange={(e) => setproduct_price(e.target.value)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Image </Label>
                        <input ref={register} type="file" name="image" />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </form>
            </div>
        </div>
        </>
        ):(
            <h1> You are not an Admin!</h1>
        )}
        </div>
    );
}

export default CreateProduct;