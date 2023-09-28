import React, { useState } from 'react'
import '../styles/register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Register() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post("http://localhost:5000/api/register", form).then((response) => {
            console.log(response);
        });
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div>Register</div>
            <div className="loginpanel">
                <p>felhasználónév</p>
                <input name="username" type="text" className="user" onChange={handleChange}></input>
                <p>e-mail</p>
                <input name="email" type="text" className="email" onChange={handleChange}></input>
                <p>jelszó</p>
                <input name="password" type="text" className="password" onChange={handleChange}></input>
                <button type="button" className="login" onClick={handleSubmit}>Regisztráció</button>
            </div>
        </div>
    )
}
