import React, { useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
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
        let response = await axios.post("http://localhost:5000/api/login", form)

        if (response.data.err) {
            alert(response.data.err);
        }

        if (response.data.message == "User logged in!") {
            sessionStorage.setItem("userId", JSON.stringify(response.data.result[0]));
            sessionStorage.setItem("username", JSON.stringify(response.data.result[1]));
            sessionStorage.setItem("email", JSON.stringify(response.data.result[2]));
            console.log('asd');
            navigate("/home")
        }
        else {
            alert(response.data.message);
            setForm({
                username: "",
                password: ""
            });
        }

    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
            <div>Login</div>
            <form className="loginpanel" onSubmit={handleSubmit}>
                <p>felhasználónév</p>
                <input type="text" name="username" onChange={handleChange} className="user"></input>
                <p>jelszó</p>
                <input type="password" name="password" onChange={handleChange} className="password"></input>
                <button type="submit" className="login">Bejelentkezés</button>
            </form>
        </div>
    )
}
