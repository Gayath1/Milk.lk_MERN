import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ListBar = (props) => {

  const onDeleteProductData = (i) => {
    
    const body = {i};
    
    
    axios.post(`http://localhost:4000/store/admin/orders/delete/`,body,{}).then(res => console.log(res.data));

}
    return (
        
        
        <div className='product-cardadmin container'>
        
      <div>
      <p className='product-card label'>{props.product.name}</p>
      <p className='product-card label'>{props.product.address}</p>
      <p className='product-card label'>{props.product.mobile}</p>
      <ul>
      
      <ul>{props.product.orders.map((order, i) => {
        return <li style={{color: 'red', fontSize:'0.8vw'}} key={i}>{order.product_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{order.quantity}</li>
        })}</ul>
      </ul>
      <button className="orderdelete" style={{border:"none", background:"white", fontSize:"1.5vw", marginLeft:"40%" }} onClick={(i)=>onDeleteProductData(props.product._id,i)}><AiOutlineDelete /></button>
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
              <li className="navbar-item">
                <Link to="/orders" className="nav-link">Orders</Link>
              </li>
            </ul>
          </div>
        </nav>
          
        <div className="cardsadmin">
               
        {listData.lists.map((current, i) => (
                        <ListBar product={current} key={i} />
                    ))}
                    
                    
        </div>
        </div>
        
        
    );
}

export default Store;