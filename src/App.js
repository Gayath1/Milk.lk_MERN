import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {  Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom'
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ListProduct from './components/list-Product.component';
import EditProduct from './components/edit-Product.component';
import CreateProduct from './components/create-Product.component';
import DeleteProduct from './components/delete-Product.component';
import profile from './components/profile';
import { Provider } from 'react-redux';
import store from './store';
import updateuser from './components/userupdate';
import home from './components/home';
import mainstore from './components/store';
import freshmilk from './components/freshmilk';
import product from './components/product details';

const App = () => {
  
  

  return (
    
    
    <Provider store={store}>
    <Router>
    <Route path="/home"  component={home} />
        <Route path="/list"  component={ListProduct} />
        <Route path="/store"  component={mainstore} />
        <Route path="/freshmilk"  component={freshmilk} />
        <Route path="/view/:id"  component={product} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/delete/:id" component={DeleteProduct} />
        <Route path="/updateuser"   component={updateuser} />
        <Route  path ="/login" component={Login}/>
        <Route  path ="/register" component={Register}/>
        <Switch>
              <Route exact path ="/profile" component={profile}/>
            
           
            </Switch>
      
        </Router>
        </Provider>
      
   
    
    
    
  );

}

export default App;