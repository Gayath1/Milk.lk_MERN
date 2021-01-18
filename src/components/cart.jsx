import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
 

    const ListBar = (props) => {

      const onDeleteProductData = (_id,e) => {
        
        const body = {_id}
        axios.delete(`http://localhost:4000/store/cart/delete`,body).then(res => console.log(res.data));
  
    }
  

        return (
            
            
            <div className='product-cart container'>
            <div class="row">
            
            <div class="col-3" style = {{paddingTop:'10px'}}><img className='product-cart-img' src={`http://localhost:4000/uploads/${props.product.image}`} alt='' /></div>
            
            <div class="col-3" style = {{paddingTop:'30px'}}><p className='product-cart label'>{props.product.product_name}</p></div>
            <div class="col-3" style = {{paddingTop:'30px'}}><div class="form-group mx-sm-5 mb-2">
    
    <select class="form-control " name="quantity" value={props.product.quantity} >
      <option value='1'>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div></div>
            <div class="col-3" ><p className='product-cart label'>{props.product.product_price}</p></div>
          <div class="col-3" ><Button onClick={onDeleteProductData}>Remove </Button></div>
          </div>
            </div>
            
            
        );
    }
    
    const Store = () => {
        const [listData, setListData] = useState({ lists: [] });
        const [Total, setTotal] = useState(0)
        const [ShowTotal, setShowTotal] = useState(false)
    
        useEffect(() => {
            const fetchData = async () => {
                const token = JSON.parse(localStorage.getItem('Token'));
                const body ={token}
                const result = await axios.post(
                    'http://localhost:4000/store/cart',body);
                setListData({ lists: result.data });
            };
            fetchData();
        }, []);

       
        
        const calculateTotal = (products) => {
          let total = 0;
    
          listData.lists.map(current => {
              total += parseInt(current.product_price, 10) * current.quantity
          });
    
          setTotal(total)
          setShowTotal(true)
      }
     console.log(listData.lists)
      const itemsPrice =  listData.lists.reduce((a, c) => a + c.quantity * c.product_price, 0);;
      const totalPrice = itemsPrice;
      
        return (
            <div className="store">
            <div className="header">
              <a href="/store" className="logo">Milk.Lk</a>
              <div className="menu">
                <div className="dropdown">
                  <button className="dropbtn">Category</button>
                  <div className="dropdown-content">
                    <a href="/freshmilk">FreshMilk</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <a href="/login">Contact us</a>
              </div>
              <div className="header-right">
                <a href="/register">SingUp</a>
                <a href="/login">Login</a>
              </div>
            </div>
            <div className="container">    
            <div className="cart">
                   
            {listData.lists.length === 0 && <div>Cart is empty</div>}
                        {listData.lists.map((current, i) => (
                            <ListBar product={current} key={i} />
                        ))}
                    
                </div>
                <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              
              <div className="col-1 text-right">
                <strong>${totalPrice}</strong>
              </div>
            </div>
            </div>
            </div>
            
        );
                          
    }
    
    export default Store;