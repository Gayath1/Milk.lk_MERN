import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListProduct from './components/list-Product.component';
import EditProduct from './components/edit-Product.component';
import CreateProduct from './components/create-Product.component';
import DeleteProduct from './components/delete-Product.component';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">MILK.LK Admin</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">List Product</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Product</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={ListProduct} />
        <Route path="/edit/:id" component={EditProduct} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/delete/:id" component={DeleteProduct} />
      </div>
    </Router>
  );
}

export default App;