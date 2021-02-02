import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Header from '../components/header';
import  image5 from '../images/storeslide5.jpg';
import  image4 from '../images/storeslide4.png';
import './store.css';


const ListBar = (props) => {
    return (
        
        
        <div className='product-card container'>
        <img className='product-card-img' src={`http://localhost:4000/uploads/${props.product.image}`} alt='' />
        <div>
      <Link to={"/view/" + props.product._id}><p className='product-card label'>{props.product.product_name}</p></Link>
      
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
        <div className="store">
        <Header />
        <div className="container1">
        <div className="imgslide" >
            <img  className="imgslideshow" src={image5}  alt="imageslide"/>
        </div>
        
        <div className="cards" >
               
                
                    {listData.lists.map((current, i) => (
                        <ListBar product={current} key={i} />
                    ))}
                
            </div>
        </div>
        </div>
        
    );
}

export default Store;