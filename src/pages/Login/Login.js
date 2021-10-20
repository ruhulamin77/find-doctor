import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, error, success, handleLoginUsingEmailAndPassword } = useAuth();
    return (
        <div className="login-container my-5">
            <div>
                <h3 className=" mb-3 login-text">Please Login</h3>
                <form onSubmit={handleLoginUsingEmailAndPassword} className="login-form">
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" required />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your password" required />
                    <input type="submit" className="btn-form" value="Login" />
                    {error && <p className="text-danger">{error}</p>}
                    {success && <p className="text-success">{success}</p>}
                    <p>New in this site? <Link to="/register">Please Register</Link></p>
                </form>
                <p className="or">OR</p>
                <button onClick={signInUsingGoogle} className="btn-google"><i class="fab fa-google"></i> Sign in with google</button>

            </div>
        </div>

    );
};

export default Login;