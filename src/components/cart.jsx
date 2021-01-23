import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
 

    
    
    const Store = () => {
        const [listData, setListData] = useState({ lists: [] });
       
        
      const [user,setuser] = useState({ 
        name:"",
        address:"",
        mobile:"",

       });

       
    
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

        const onDeleteProductData = (_id,e) => {
        
          const body = {_id}
          axios.delete(`http://localhost:4000/store/cart/delete`,body).then(res => console.log(res.data));
    
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
          const body = {listData, user, token}
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
                          
                           <div className='product-cart container'>
            
            
                             <div className="colm1" ><img key={i} className='product-cart-img' src={`http://localhost:4000/uploads/${current.image}`} alt='' /></div>
            
            <div className="colm2" ><a >{current.product_name}</a></div>
            <div className="colm3"><div class="form-group mx-sm-4 mb-2">
    
    <select class="form-control " name="quantity" onChange={(ev) => onChangeProductData(ev, i)} value={current.quantity} >
      <option value='1'>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div></div>
            <div className="colm4" style = {{paddingTop:'30px'}} ><p className='product-cart label'>{current.product_price}</p></div>
          <div className="colm5" style = {{paddingTop:'30px'}} ><Button onClick={onDeleteProductData}>Remove </Button></div>
          </div>
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
            <form onSubmit={placeorder}>
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
            
        );
                          
    }
    
    export default Store;