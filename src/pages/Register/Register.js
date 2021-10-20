
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error, successRegistration, user, handleNameChange } = useAuth()


    return (
        <Container>
            <div className="register-container my-5">
                <div>
                    <h3 className="login-text mb-3">Please Register</h3>
                    <form onSubmit={handleRegistration} className="register-form">
                        <input type="text" placeholder="Enter your name" onBlur={handleNameChange} />
                        <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Enter your email" required />
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Enter your password" required />
                        <input type="submit" className="btn-form" value="Register" />
                    </form>
                    <p>Already have an account? <Link to="/login">Please login</Link></p>
                    {error && <p className="text-danger">{error}</p>}
                    {successRegistration && <p className="text-success">{successRegistration}</p>}
                    <p className="or">OR</p>
                    <button onClick={signInUsingGoogle} className="btn-google"><i className="fab fa-google"></i> Sign in with google</button>
                </div>
            </div>
        </Container>
    );
};

export default Register;