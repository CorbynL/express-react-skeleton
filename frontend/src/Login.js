import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="Login">
            <p>Login</p>
            <form>
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
            <Link to="/">
                <button type="button">
                   Home
                </button>
            </Link>
        </div>
    );
}

export default hot(module)(Login);