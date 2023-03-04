import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContexts';
import './login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.path || '/'
    const {signIn} = useContext(AuthContext);
    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result=>{console.log(result.user)
            navigate(from, {replace: true})})
        .catch(error=> console.log(error))
    }
    return (
        <div className="form-container">
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit} className='form-main'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="login" />
            </form>
            <p className='newUser'>New to ema john? <Link to={'/signup'}>Create a New Account</Link> </p>
        </div>
    );
};

export default Login;