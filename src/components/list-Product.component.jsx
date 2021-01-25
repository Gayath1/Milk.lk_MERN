import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import axios from 'axios';
import UserContext from '../userContext';


import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ListBar = (props) => {
    return (
        
        <tr>
            <td>{props.product.product_name}</td>
            <td>{props.product.product_brand}</td>
            <td>{props.product.product_price}</td>
            <td>
                <Link to={"/edit/" + props.product._id}><AiOutlineEdit /></Link>
                <Link to={"/delete/"+props.product._id}><AiOutlineDelete /></Link>
            </td>
        </tr>
        
    );
}

function ListProduct  () {
    let {userData} = useContext(UserContext );
    const history = useHistory();
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/all_product/'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);

    return (
        
        <div className="container">
        { userData.user.email === 'admin@admin.lk' ? (
            <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">MILK.LK Admin</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/list" className="nav-link">List Product</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Product</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">LogOut</Link>
              </li>
            </ul>
          </div>
        </nav>
        
      
        <div>
            <h3>List Product</h3>
            <Table striped style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>product Name</th>
                        <th>product brand</th>
                        <th>product price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                
                    {listData.lists.map((current, i) => (
                        <ListBar product={current} key={i} />
                    ))}
                </tbody>
            </Table>
        </div>
        </>
        ) : (
            <h1> You are not an Admin!</h1>
        )}
        </div>
           
         
          
        
    );
}

export default ListProduct;