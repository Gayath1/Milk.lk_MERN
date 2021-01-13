import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ListBar = (props) => {
    return (
        
        
        <div className='product-card container'>
        <img className='product-card-img' src={`http://localhost:4000/uploads/${props.product.image}`} alt='' />
        <div>
      <Link to={"/view" + props.product._id}><p className='product-card label'>{props.product.product_name}</p></Link>
      <p className='product-card label'>{props.product.product_brand}</p>
      <p className='product-card label'>{props.product.product_price}</p>
      </div>
        
        </div>
        
        
    );
}

const Store = () => {
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/store/freshmilk'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);
    
    return (
      <div className="store">
      <div class="header">
        <a href="/store" class="logo">Milk.Lk</a>
        <div className="menu">
          <div class="dropdown">
            <button class="dropbtn">Category</button>
            <div class="dropdown-content">
              <a href="/freshmilk">FreshMilk</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a href="/login">Contact us</a>
        </div>
        <div class="header-right">
          <a href="/register">SingUp</a>
          <a href="/login">Login</a>
        </div>
      </div>
      <div class="container">   
        <div class="cards">
               
                
                    {listData.lists.map((current, i) => (
                        <ListBar product={current} key={i} />
                    ))}
                
            </div>
        </div>

        </div>
    );
}

export default Store;