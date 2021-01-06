import axios from "axios";
import { returnStatus } from "./statusActions";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
  IS_LOADING,
} from "./types";

//Uncomment below for local testing
 axios.defaults.baseURL = "http://localhost:4000";

//uncomment and set url to your own for prod
//axios.defaults.baseURL = "https://demos.shawndsilva.com/sessions-auth-app"

//Check if user is already logged in



export const isAuth = () => (dispatch) => {
  
  

  
    axios
    .get("/api/authchecker",{withCredentials:true})
    .then((res) =>
      dispatch({
        type: AUTH_SUCCESS,
        
        
      })
    )
    .catch((err) => {
      dispatch({
        type: AUTH_FAIL
      });
    });

}

//Login User
export const login = ({ email, password }) => (dispatch) => {
  // Headers
  const headers = {
    headers: {
      "Content-Type": "application/json",
      
      
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });
  

  axios
    .post("/api/login", body, headers)
    .then((res) => {
  
      
      localStorage.setItem('session',JSON.stringify(res.data.sessUser));
      localStorage.setItem('Token',JSON.stringify(res.data.token));
      localStorage.setItem('session-id',JSON.stringify(res.data.session));
      document.cookie ='session-id='+JSON.stringify(res.data.session);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      
      dispatch({ type: IS_LOADING });
    }
    )
    .catch((err) => {
      dispatch(returnStatus(err.response.data, err.response.status, 'LOGIN_FAIL'))
      dispatch({
        type: LOGIN_FAIL
      });
      dispatch({ type: IS_LOADING })
    });
};

//Logout User and Destroy session
export const logout = () => (dispatch) => {

  
    axios
    .delete("/api/logout",{withCredentials: true})
    .then((res) =>{
      
 
    localStorage.removeItem("session");
    localStorage.removeItem('Token');
    localStorage.removeItem('session-id');
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    }
    )
    .catch((err) => {
      console.log(err);
    });

}


export const user_update = () => (dispatch) => {
  
  const token = JSON.stringify(localStorage.getItem("Token"));

  const password= JSON.stringify(this.state.password);
  const body = (token,password);
  axios
  .post("/api/user/update",body)
  .then((res) => {
  
      
   
    dispatch({
      type: LOGIN_SUCCESS,
      
    });
    
    dispatch({ type: IS_LOADING });
  }
  )
  .catch((err) => {
    dispatch(returnStatus(err.response.data, err.response.status, 'LOGIN_FAIL'))
    dispatch({
      type: LOGIN_FAIL
    });
    dispatch({ type: IS_LOADING })
  });
}