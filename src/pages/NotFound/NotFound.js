import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="errorcode">ERROR 404</h1>
            <div className="errortext">Page Not Found!</div>
            <Link to="/home" className="button-back">
                <button className="btn-google">Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;