import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
 
    const ListBar = (props) => {
        return (
            
            
            <div className='product-cart container'>
            <div class="row">
            
            <div class="col-3" style = {{padding:'10px'}}><img className='product-cart-img' src={`http://localhost:4000/uploads/${props.product.image}`} alt='' /></div>
            
            <div class="col-3" style = {{padding:'30px'}}><p className='product-cart label'>{props.product.product_name}</p></div>
            <div class="col-3" style = {{padding:'30px'}}><div class="form-group mx-sm-3 mb-2">
    
    <select class="form-control " name="quantity" value={props.product.quantity} >
      <option value='1'>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div></div>
            <div class="col-3" style = {{padding:'30px'}}><p className='product-cart label'>{props.product.product_price}</p></div>
          
          
          </div>
            </div>
            
            
        );
    }
    
    const Store = () => {
        const [listData, setListData] = useState({ lists: [] });
    
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
                   
                    
                        {listData.lists.map((current, i) => (
                            <ListBar product={current} key={i} />
                        ))}
                    
                </div>
            </div>
            </div>
            
        );
    }
    
    export default Store;