import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Login = ({ setLoginUser }) => {
    const [user, setUser] = useState({
        email: ``,
        password: ``
    });
    const [loggedIn, setLoggedIn] = useState(false);

    const location = useLocation();

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:3006/login`, user);
        alert(res.data.message);
        setLoggedIn(res.data.user ? true : false);
        setUser({ email: ``, password: `` });
        setLoginUser(res.data.user);
    };

    return (
        <>
            {loggedIn && <Navigate to="/" state={{ from: location }} />}
            <div class ="text-center">
            <h3>Sign in to Chitter</h3>
            <form onSubmit={login}>
                <input type="email" id="sign-in-email" name="email" value={user.email} onChange={handleChange} placeholder="Email Address" />
                <br />
                <input type="password" id="sign-in-password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                <br />
              
                <button type="button" class="btn btn-outline-danger">
                <input type="submit" value="Login In" />
                </button>
             
            </form>
            <div class="text-royal-blue">
                <p>New to Chitter? Register now!</p>
                </div>
                <div>
                <Link to ="/register">             
            <button type="button" class="btn btn-outline-primary">Register</button>
           </Link>
           </div>
        <div class="text-silver">
            <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
        </div>
        </div>
      
        </>
    );
}

export default Login;