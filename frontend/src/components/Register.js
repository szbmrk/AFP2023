import React from 'react'
import '../styles/register.css'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" disabled>Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
