import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="Login">
            <p>Login</p>
            <Link to="/">
                <button type="button">
                   Home
                </button>
            </Link>
        </div>
    );
}

export default hot(module)(Login);