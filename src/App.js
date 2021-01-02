import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {  Switch} from 'react-router-dom';


import { BrowserRouter as Router, Route} from 'react-router-dom'
import ListProduct from './components/list-Product.component';
import EditProduct from './components/edit-Product.component';
import CreateProduct from './components/create-Product.component';
import DeleteProduct from './components/delete-Product.component';
import Login from './components/login';
import Register from './components/register';
import profile from './components/profile';
import { Provider } from 'react-redux';
import store from './store';



const App = () => {
  
  

  return (
    
    <Provider store={store}>
    <Router>
      
        <Route path="/login"   component={Login} />
        <Route path="/register"  component={Register}  />
        <Route path="/list"  component={ListProduct} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/delete/:id" component={DeleteProduct} />
        
        <Switch>
              <Route exact path ="/profile" component={profile}/>
            </Switch>
      
        </Router>
        </Provider>
      
   
    
    
    
  );

}

export default App;