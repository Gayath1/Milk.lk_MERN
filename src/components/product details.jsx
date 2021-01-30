import React, { useState, useEffect, useContext  } from 'react';
import UserContext from '../userContext';
import { useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import Header from '../components/header';

const DeleteProduct = (props) => {
  let {userData} = useContext(UserContext );
  const history = useHistory();
  const login = () => history.push("/login");

    const [data, setData] = useState({
        product_name: "",
        product_brand: "",
        product_category: "",
        product_price: "",
        image: "",
        
    });
    const [quantity, setquantity] = useState({
      quantity: "1",

    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/store/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

   const  handleSelectChange = (event) => {
      setquantity({
        quantity: event.target.value
      })
    }


    const addtocart = (e) => {
      const token = localStorage.getItem('Token');
      const body ={data,token,quantity}
      e.preventDefault();
      axios.post("/store/addtocart", body)
      .then((res) => {
          if (res.status === 200) {
              alert('Product added success');
          } 
      }).catch((err) => {
          console.error(err);
          alert('Error please try again');
      });
      };

    return (
        <div className="store">
        <Header />
        
        <div class="container">    
        <div class="datacard">
               
                
        <div className='product-card containerdetails'>
        <img className='product-card-img' src={`http://localhost:4000/uploads/${data.image}`} alt='' />
        <div>
      <p className='product-card label'>{data.product_name}</p>
      <p className='product-card label'>{data.product_brand}</p>
      <p className='product-card label'>LKR.{data.product_price}</p>
      <div class="form-group mx-sm-3 mb-2">
    
    <select class="form-control " name="quantity"  onChange={handleSelectChange}>
      <option value='1'>1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
  </div>
  {userData.user ?(
    <Button onClick={addtocart} color="primary" className="cartadd" type="submit"> Add to Cart</Button>
  ) : (
      <Button onClick={login} color="primary" className="cartadd" type="submit"> Login</Button>
      )
      }
      </div>
        
        </div>
                
            </div>
        </div>
        </div>
        
               
    );
}

export default DeleteProduct;