import React, { useState } from 'react'
import '../styles/register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const navigate = useNavigate();

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post("http://localhost:5000/api/register", form)

        if (response.data.err) {
            alert(response.data.err);
        }

        if (response.data.message == "User registered!") {
            navigate("/login")
        }
        else {
            alert(response.data.message);
            setForm({
                username: "",
                email: "",
                password: ""
            });
        }
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
            <form className="loginpanel" onSubmit={handleSubmit}>
                <p>felhasználónév</p>
                <input name="username" type="text" className="user" onChange={handleChange} required></input>
                <p>e-mail</p>
                <input name="email" type="email" className="email" onChange={handleChange} required></input>
                <p>jelszó</p>
                <input name="password" type="password" className="password" onChange={handleChange} required></input>
                <button type="submit" className="login">Regisztráció</button>
            </form>
        </div>
    )
}
