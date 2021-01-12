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
                'http://localhost:4000/store/'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);
    
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/store" className="navbar-brand">MILK.LK</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
              </li>
              <li className="navbar-item">
                <Link to="/register" className="nav-link">Create Account</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
            
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