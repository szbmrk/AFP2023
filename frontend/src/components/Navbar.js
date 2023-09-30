import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/inventory">Inventory</NavLink>
                </li>
                <li>
                    <NavLink to="/skins">Összes skin</NavLink>
                </li>
                <li>
                    <NavLink to="/offers">Ajánlatok</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Kijelentkezés</NavLink>
                </li>
            </ul>
        </nav>
    )
}
