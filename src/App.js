import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import ListProduct from './components/list-Product.component';
import EditProduct from './components/edit-Product.component';
import CreateProduct from './components/create-Product.component';
import DeleteProduct from './components/delete-Product.component';
import Login from './components/login';


const App = () => {
  const user = null;
  return (
    
        <AuthProvider>
    <Router>
      
        <Route path="/" exact component={Login} />
        <Route path="/list"  component={ListProduct} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/delete/:id" component={DeleteProduct} />
      
    </Router>
    </AuthProvider>
    
  );

}

export default App;