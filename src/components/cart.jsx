import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from '../components/header';
import './cart.css';
import { Empty } from 'antd';
    
    const Store = () => {
        const [listData, setListData] = useState({ lists: [] });
       
        
      const [user,setuser] = useState({ 
        name:"",
        address:"",
        mobile:"",

       });

       
    
        useEffect(() => {
            const fetchData = async () => {
                const token = (localStorage.getItem('Token'));
                const body ={token}
                const result = await axios.post(
                    'http://localhost:4000/store/cart',body);
                setListData({ lists: result.data });
            };
            fetchData();
        }, []);

        const onDeleteProductData = (_id,e) => {
        
          const body = {_id}
          axios.delete(`http://localhost:4000/store/cart/delete`,body).then(res =>{ window.location.reload();
          console.log(res.data)});
    
      }
       
       const handleInputChange = (e) => {
        setuser({ 
          ...user,
          [e.target.name]: e.target.value });
      };
      
      const onChangeProductData = (e, i) => {
        const lists = [...listData.lists];
        lists[i] = {
            ...lists[i],
            [e.target.name]: e.target.value
        }
        setListData({
            ...listData,
            lists
        })    
    }
    

        const placeorder = (event) => {
          const token = JSON.parse(localStorage.getItem('Token'));
          const body = {listData, user, token};
          event.preventDefault();
          axios.post('http://localhost:4000/store/orders',body, {
          })
          .then(res => {
            if (res.status === 200) {
              alert('Order success');
              <Redirect to="/store"/>
          }   
          })
          .catch(err => {
            console.error(err);
            alert('Error please try again');
          });
        }
        
       
     
      const itemsPrice =  listData.lists.reduce((a, c) => a + c.quantity * c.product_price, 0);;
      const totalPrice = itemsPrice;
      
        return (
            <div className="store">
            <Header />
            <div class="row" style={{width:'100%'}}>

               
            <div class="col-lg-7 col-lg-offset-2 gauche">
            <div className="cart">
                   
            {listData.lists.length === 0 && <div style={{paddingTop:'10vw'}}><Empty description={false}>
  <a>Empty Cart</a>
</Empty>

</div>}
                        {listData.lists.map((current, i) => (
                          
                           <div className='product-cart container'>
            
            
                             <div className="colm1" ><img key={i} className='product-cart-img' src={`http://localhost:4000/uploads/${current.image}`} alt='' /></div>
            
            <div className="colm2" ><a className="cartpname">{current.product_name}</a></div>
            <div className="colm3"><div class="form-group mx-sm-4 mb-2">
    
    <select class="form-control  " style={{borderRadius:'10px'}} name="quantity" onChange={(ev) => onChangeProductData(ev, i)} value={current.quantity} >
      <option value='1'>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div></div>
            <div className="colm4" ><p className='product-cart label'>{current.product_price}</p></div>
          <div className="colm5"  ><Button onClick={onDeleteProductData}>Remove </Button></div>
          </div>
                        ))}
                        </div>
                    
                </div>
                <div class="col-lg-4 corps">
                <div className="totalprice">
                <div className="row">
              <div className="col-4">
                <strong>Total Price</strong>
              </div>
              
              <div className="col-3 text-right">
                <strong>LKR.{totalPrice}</strong>
              </div>
            </div>
            </div>
            <form className="placeorderdetails" onSubmit={placeorder}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="text" class="form-control" name="name" value={user.name} aria-describedby="emailHelp" placeholder="Name" required onChange={handleInputChange}/>
              
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Address</label>
              <input type="text" class="form-control" name="address"  value={user.address} placeholder="Address" required onChange={handleInputChange}/>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Mobile number</label>
              <input type="tel" class="form-control" name="mobile" value={user.mobile} placeholder="Mobile number" required onChange={handleInputChange}/>
            </div>
            <button type="submit" class="btn btn-primary">place order</button>
          </form>
</div>
            </div>
            </div>
            
            
            
        );
                          
    }
    
    export default Store;