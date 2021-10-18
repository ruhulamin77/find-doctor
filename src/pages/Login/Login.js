import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsigGoogle } = useAuth();
    return (
        <div className="App">
            <h2>Please login</h2>
            <button onClick={signInUsigGoogle} className="btn btn-outline-info">Sign in with google</button>
        </div>
    );
};

export default Login;