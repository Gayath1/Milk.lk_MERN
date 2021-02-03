import React, { useState, useEffect,useContext } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import UserContext from '../userContext';

const DeleteProduct = (props) => {
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
                `https://milklk.herokuapp.com/all_product/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeleteProductData = (e) => {
        e.preventDefault();
        axios.delete(`https://milklk.herokuapp.com/all_product/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/list');
    }

    return (
        <div style={{ marginTop: 10 }}>
        {userData.role ? (
            <>
            <h3>Delete Product</h3>
            <Form onSubmit={onDeleteProductData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Product Name </Label>
                        <Input
                            readOnly
                            type="text"
                            name="product_name"
                            className="form-control"
                            value={data.product_name} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Brand </Label>
                        <Input
                            readOnly
                            type="text"
                            name="product_brand"
                            className="form-control"
                            value={data.product_brand} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Category </Label>
                        <Input
                            readOnly
                            type="text"
                            name="product_category"
                            className="form-control"
                            value={data.product_category}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Price </Label>
                        <Input
                            readOnly
                            type="text"
                            name="product_price"
                            className="form-control"
                            value={data.product_price} />
                    </Col>
                </FormGroup>
                <Button color="danger"><AiOutlineDelete /> Delete Data</Button>
            </Form>
            </>
        ) : (
            <h1> You are not an Admin!</h1>
        )}
        </div>
    );
}

export default DeleteProduct;