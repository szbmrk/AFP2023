import React from 'react'
import '../styles/login.css'
export default function Login() {
    return (
        <div>

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
