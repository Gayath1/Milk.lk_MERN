import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../userContext';
import { ShoppingCartOutlined  } from '@ant-design/icons';
import { Button} from 'reactstrap';
import 'antd/dist/antd.css';
function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    const cart = () =>history.push('/cart')
    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("Token","");
    };

    return (
        <nav className="auth-options">
        <button  onClick={cart} style={{border: 'none',outline:'none'}}>
        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#000000', paddingRight:'30px' }} /></button>
            {userData.user ? (
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
            ) : (
                <>
                <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                <button className="btn btn-primary mr-2" onClick={login}>Login</button>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;