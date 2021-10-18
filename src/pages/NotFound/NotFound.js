import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="errorcode">ERROR 404</h1>
            <div className="errortext">This area is forbidden. Turn back now!</div>
            <Link to="/home" className="button-back">
                <button className="btn btn-warning btn-back">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;