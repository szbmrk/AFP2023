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
            <nav className="nav2">
                    <Link to="/login" className="link">Bejelentkezés</Link>
            </nav>
            <div className="registerbox">
                <h1 className="text2">Regisztráció</h1>
                <form className="registerpanel" onSubmit={handleSubmit}>
                    <p className = "registertext">felhasználónév</p>
                    <input name="username" type="text" className="user" onChange={handleChange} required></input>
                    <p className = "registertext">e-mail</p>
                    <input name="email" type="email" className="email" onChange={handleChange} required></input>
                    <p className ="registertext">jelszó</p>
                    <input name="password" type="password" className="password" onChange={handleChange} required></input>
                    <button type="submit" className="register">Regisztráció</button>
                </form>
            </div>
        </div>
    )
}
