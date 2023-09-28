import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/inventory">inventory</NavLink>
                </li>
                <li>
                    <NavLink to="/skins">all skins</NavLink>
                </li>
                <li>
                    <NavLink to="/offers">offers</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}
