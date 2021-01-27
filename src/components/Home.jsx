import React from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {
  Button,
  Card,
 CardTitle,
  CardSubtitle,
  CardBody
} from "reactstrap";
import './Home.css';
import images from '../images/Family Values Shopping.png';


function Home(){
 
    return (
      <div className="containerhome">
        <div className="left1">
            <h1 className='title'>MILK.LK</h1>
            <button className="getstart">Get Started</button>
            <h3 className='subtitle'>Srilanka’s first Dairy online shop</h3>
        </div>
        <div className="right1">
            <img className="imghome" src={images}  alt="Girl in a jacket" ></img>
        </div>
      </div>
       
    )
  }




export default Home;