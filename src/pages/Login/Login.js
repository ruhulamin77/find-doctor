import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, error, success, handleLoginUsingEmailAndPassword } = useAuth();
    return (
        <div className="login-container my-5">
            <div>
                <h3>Please Login</h3>
                <form onSubmit={handleLoginUsingEmailAndPassword} className="login-form">
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" required />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your password" required />
                    <input type="submit" value="Login" />
                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}
                    <p>New in This Site? <Link to="/register">Please Register</Link></p>
                </form>


                ---------or----------
                <br />
                <button onClick={signInUsingGoogle} className="btn btn-outline-info">Sign in with google</button>

            </div>
        </div>

    );
};

export default Login;