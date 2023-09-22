import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/login" disabled>Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
            <div>Login</div>
            <div className="loginpanel">
                <p>felhasználónév</p>
                <input type="text" className="user"></input>
                <p>jelszó</p>
                <input type="text" className="password"></input>
                <button type="button" className="login">Bejelentkezés</button>


            </div>

        </div>
    )
}
