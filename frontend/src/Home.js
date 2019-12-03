import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <p>Home</p>
            <Link to="/Login">
                <button type="button">
                   Login
                </button>
            </Link>
        </div>
    );
}
export default hot(module)(Home);