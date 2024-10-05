import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((preVal) => ({
            ...preVal, [name]: value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            username: user.username,
            password: user.password
        }));
        navigate("/")
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name='password' value={user.password} onChange={handleChange} />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}
