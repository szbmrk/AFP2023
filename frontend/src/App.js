// Layout.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components//Login';
import Register from './components/Register';
import './styles/navbar.css';
function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path='/' Component={Login} />
                    <Route path='/login' Component={Login} />
                    <Route path='/register' Component={Register} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
