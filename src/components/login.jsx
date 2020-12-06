import React,  {useState} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
 



    
   


    const SignIn = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const signInWithEmailAndPasswordHandler = 
                (event,email, password) => {
                    event.preventDefault();
        };
    
          const onChangeHandler = (event) => {
              const {name, value} = event.currentTarget;
    
              if(name === 'userEmail') {
                  setEmail(value);
              }
              else if(name === 'userPassword'){
                setPassword(value);
              }
              const { currentUser } = useContext(AuthContext);
if (currentUser) {
  return <Redirect to="/link" />;
}
          }
          
    
    
return (
    
      <div className="rectangle">
        
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left"></i> Back to
              home
            </Link>
            <div className="cols12">
              <h4>
                <b>Login</b>
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form >
              
            <div className="form-group">
      
    
         
         
                <input
                  name="userEmail"
                  value = {email}
                  className="form-control"
                  id="userEmail"
                  type="email"
                  placeholder="Your e-mail"
                  onChange = {(event) => onChangeHandler(event)}
                  
                />
                </div>
                
              
              <br/>
              <div className="form-group">
         
                <input
                    name="userPassword"
                    value = {password}
                  className="form-control"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange = {(event) => onChangeHandler(event)}
                  
                />
                </div>
                
               
                
             
                
                <button
                
          
                  
                  type="submit"
                  className="btn_login"
                >
                  Login
                </button>
               
              
            </form>
          </div>
        </div>
        
          
        
          
          
           
        

        
        
    );
    
  }
  

export default SignIn;