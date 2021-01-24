import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AuthOptions from './AuthOptions';

class Header extends Component {
   
    render() { 
        return ( 
        
        <div class="header">
          <a href="/store" class="logo">Milk.Lk</a>
          <div className="menu">
            <div class="dropdown">
              <button class="dropbtn">Category</button>
              <div class="dropdown-content">
                <a href="/freshmilk">FreshMilk</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <a href="/login">Contact us</a>
          </div>
          <div class="header-right"> 
            <AuthOptions />
            </div>
            </div>
         );
    }
}
 
export default Header;