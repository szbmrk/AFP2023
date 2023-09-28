import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/inventory">inventory</Link>
                </li>
                <li>
                    <Link to="/skins">all skins</Link>
                </li>
                <li>
                    <Link to="/offers">offers</Link>
                </li>
                <li>
                    <Link to="/logout">logout</Link>
                </li>
            </ul>
        </nav>
    )
}
