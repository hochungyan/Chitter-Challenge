import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Right from '../Left.jsx';
import logo from '../../../src/images/Chitter.mp4';
//Setup for User [name, email, password]
const Register = () => {
    const [peeps, setPeeps] = useState([]);
    const [user, setUser] = useState({
        name: ``,
        email: ``,
        password: ``
    });

    //What is this?
    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
//Post request [Axios]
    const register = async (e) => {
        e.preventDefault();
        const { name, email, password } = user;
        if (name && email && password) {
            const res = await axios.post(`https://chitter-challenge-xbbf.onrender.com/register`, user);
            alert(res.data.message);
            return;
        }
        alert(`Invalid input`);
    }

    return (
        <>     
        <div className="container pb-5">
        <div className="row gap-3">
    <Right peeps={peeps}
setPeeps={setPeeps}
user={user}
/>  
      <div className="col-3 bg-light border rounded-4">
<div className="container pb-5">
        <div className="row gap-4">
    <div class ="text-center">Create new account</div>
            <p>Already have an account?&nbsp;<Link to="/" class="text-danger"><br/>Login In</Link>
            </p>
            <form onSubmit={register}>
                <input type="text" id="create-account-pseudo" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
                <br />
                <input type="email" id="create-account-first-name" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                <br />
                <input type="password" id="create-account-email" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                <br />
                <button type="submit" class="btn btn-outline-primary">
                    Register
                </button>
                <video autoPlay loop muted width="150">
    <source src = {logo} alt="Chitter" width="100"></source>
  </video>



    </form>
</div>
</div>
</div>
</div>
</div>
</>
        
    );
}

export default Register;