import React from 'react';
import {hot} from "react-hot-loader";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

      function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        let values = {}
        formData.forEach((value, key) => values[key] = value);
        console.log(values);
        const header = {
            ContentType: 'application/json',
            Accept: 'application/json'
          };
        axios.post('http://localhost:3000/api/login', values);
        axios.get('http://localhost:3000/api/users').then(res => console.log(res.data));
        
    }

    return (
        <div className="Login">
            <p>Login</p>
            <form  onSubmit={handleSubmit}>
                <input name="email" type="text" placeholder="email"></input>
                <input name="password" type="text" placeholder="password"></input>
                <button type="submit">Login</button>
            </form>
            {/* <Link to="/">
                <button type="button">
                   Home
                </button>
            </Link> */}
        </div>
    );
}

export default hot(module)(Login);