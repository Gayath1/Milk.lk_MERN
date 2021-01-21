import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ListBar = (props) => {
    return (
        
        
        <div className='product-card container'>
        
      <div>
      <p className='product-card label'>{props.product.name}</p>
      <p className='product-card label'>{props.product.address}</p>
      <p className='product-card label'>{props.product.mobile}</p>
      <ul>
      
      <ul>{props.product.orders.map((order, i) => {
        return <li key={i}>{order.product_name}{order.quantity}</li>
        })}</ul>
      </ul>
      </div>
        
        </div>
        
        
    );
}

const Store = () => {
    const [listData, setListData] = useState({ lists: []});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/store/admin/orders'
            );
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
        <div className="cards">
               
        {listData.lists.map((current, i) => (
                        <ListBar product={current} key={i} />
                    ))}
                    
                    
        </div>
        </div>
        </div>
        
    );
}

export default Store;