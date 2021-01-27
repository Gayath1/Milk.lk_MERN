import React from 'react';
import { Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link,useHistory } from 'react-router-dom';
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
    const history = useHistory();
    const register = () => history.push("/register");
    const login = () => history.push("/login");
    return (
      <div className="containerhome">
        <div className="left1">
            <h1 className='title'>MILK.LK</h1>
            <button className="getstart" onClick={register}>Get Started</button>
            <br/>
            <button className="getstart" onClick={login}>Login</button>
            <h3 className='subtitle'>Srilanka’s first Dairy online shop</h3>
        </div>
        <div className="right1">
            <img className="imghome" src={images}  alt="Girl in a jacket" ></img>
        </div>
      </div>
       
    )
  }




export default Home;