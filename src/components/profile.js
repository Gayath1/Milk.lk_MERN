import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const EditProduct = (props) => {
    const [data, setData] = useState({
        user_email: "",
        user_password: "",
        
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/api/updateprofile/${props.match.params.email}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onChangeProductData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data);
    }

    const onSubmitProductData = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/api/updateprofile/${props.match.params.email}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Edit Product</h3>
            <Form onSubmit={onSubmitProductData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> user email </Label>
                        <Input
                            type="text"
                            name="product_name"
                            className="form-control"
                            value={data.user_email}
                            onChange={onChangeProductData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> password </Label>
                        <Input
                            type="text"
                            name="product_brand"
                            className="form-control"
                            value={data.user_password}
                            onChange={onChangeProductData} />
                    </Col>
                </FormGroup>
              
                <Button color="primary"><AiOutlineForward /> Update Data</Button>
            </Form>
        </div>
    );
}

export default EditProduct;