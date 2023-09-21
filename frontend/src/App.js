// Layout.js
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './components//Login';
import Register from './components/Register';
import './styles/navbar.css';
function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
