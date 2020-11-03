import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const CreateProduct = (props) => {
    const [data, setData] = useState({
        product_name: "",
        product_brand: "",
        product_category: "",
        product_price: "",
    });

    const onChangeProductData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProductData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/all_product/add', data).then(res => console.log(res.data));
        setData({
            product_name: "",
        product_brand: "",
        product_category: "",
        product_price: "",
        });
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Add Product</h3>
            <Form onSubmit={onSubmitProductData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Product Name </Label>
                        <Input
                            type="text"
                            name="product_name"
                            className="form-control"
                            value={data.product_name}
                            onChange={onChangeProductData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Brand </Label>
                        <Input
                            type="text"
                            name="product_brand"
                            className="form-control"
                            value={data.product_brand}
                            onChange={onChangeProductData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Category </Label>
                        <Input
                            type="text"
                            name="product_category"
                            className="form-control"
                            value={data.product_category}
                            onChange={onChangeProductData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Price </Label>
                        <Input
                            type="text"
                            name="product_price"
                            className="form-control"
                            value={data.product_price}
                            onChange={onChangeProductData} />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreateProduct;