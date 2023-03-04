import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UseContexts';
import './signup.css'

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        if (password !== confirm) {
            setError("password didn't match")
            return
        }
        if (password.length < 6) {
            setError("Password Should be 6 characters or more")
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset()
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="form-container">
            <h2 className='form-title'>Sign up</h2>
            <form onSubmit={handleSubmit} className='form-main'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign up" />
            </form>
            <p className='newUser'>Already have an account?<Link to={'/login'}> Login</Link> </p>
            <p className='text-error'>{error}</p>

        </div>
    );
};

export default Signup;