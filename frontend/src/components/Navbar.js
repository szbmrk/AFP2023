import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import '../styles/navbar.css'

export default function Navbar() {
    return (
            <nav className="nav">
                
                    <NavLink to="/inventory" className="links">Inventory</NavLink>
                    <NavLink to="/skins" className="links">Összes skin</NavLink>
                    <NavLink to="/offers" className="links">Ajánlatok</NavLink>
                    <NavLink to="/logout" className="links">Kijelentkezés</NavLink>
            </nav>
    )
}
