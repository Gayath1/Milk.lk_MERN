import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {  Switch} from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import { BrowserRouter , Route} from 'react-router-dom'
import ListProduct from './components/list-Product.component';
import EditProduct from './components/edit-Product.component';
import CreateProduct from './components/create-Product.component';
import DeleteProduct from './components/delete-Product.component';
import order from './components/admin-order';
import profile from './components/profile';


import updateuser from './components/userupdate';
import Home from './components/Home';
import mainstore from './components/store';
import freshmilk from './components/freshmilk';
import product from './components/product details';
import cart from './components/cart';
import axios from 'axios';
import Header from './components/header';
import UserContext from './userContext';
function App ()  {
  const [ userData, setUserData] = useState({
    token:"",
    user: "",
    role: "",
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("Token");
      if(token === null){
        localStorage.setItem("Token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:4000/api/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:4000/api/profile", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
          role : userRes.data.role,
          
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
    
    <BrowserRouter>
    
    <UserContext.Provider value={{ userData, setUserData }}>
    
    <Switch>
        <Route exact path="/home"  component={Home} />
        <Route path="/list"  component={ListProduct} />
        <Route path="/store"  component={mainstore} />
        <Route path="/freshmilk"  component={freshmilk} />
        <Route path="/view/:id"  component={product} />
        <Route path="/cart"  component={cart} />
        <Route path="/orders"  component={order} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/delete/:id" component={DeleteProduct} />
        <Route path="/updateuser"   component={updateuser} />
        <Route  path ="/login" component={Login}/>
        <Route  path ="/register" component={Register}/>
        <Route exact path ="/profile" component={profile}/>
    </Switch>    
    </UserContext.Provider>
    </BrowserRouter>
   
    
    
    
  );

}

export default App;