import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import Home from './components/home';
import ListProduct from './components/list-Product.component';
import EditProduct from './components/edit-Product.component';
import CreateProduct from './components/create-Product.component';
import DeleteProduct from './components/delete-Product.component';
import Login from './components/login';
import Register from './components/register';



const App = () => {
  
  

  return (
    
    <Router>
      
        <Route path="/login"   component={Login} />
        <Route path="/home"  component={Home}  />
        <Route path="/register"  component={Register}  />
        <Route path="/list"  component={ListProduct} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/delete/:id" component={DeleteProduct} />
        
      
    </Router>
    
    
  );

}

export default App;