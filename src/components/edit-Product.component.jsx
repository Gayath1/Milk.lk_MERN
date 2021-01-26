import React, { useState, useEffect,useContext } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';
import UserContext from '../userContext';

const EditProduct = (props) => {
    let {userData} = useContext(UserContext );
    const [data, setData] = useState({
        product_name: "",
        product_brand: "",
        product_category: "",
        product_price: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/all_product/${props.match.params.id}`
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
        axios.post(`http://localhost:4000/all_product/update/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/list');
    }

    return (
        <div style={{ marginTop: 10 }}>
        {userData.role ? (
            <>
            <h3><AiOutlineUserAdd /> Edit Product</h3>
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
                <Button color="primary"><AiOutlineForward /> Update Data</Button>
            </Form>
            </>
        ) :(
            <h1> You are not an Admin!</h1>
        )}
        </div>
    );
}

export default EditProduct;