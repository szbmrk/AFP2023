// Layout.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components//Login';
import Register from './components/Register';
import './styles/navbar.css';
import ProtectedRoute from './auth/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' Component={Login} />
                <Route path='/register' Component={Register} />
            </Routes>
            <Routes>
                <Route path="/" element={<ProtectedRoute> <Navigate to="/home" /> </ProtectedRoute>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/board/:board_id" element={
                    <ProtectedRoute>
                        <Navbar />
                        <Home />
                    </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
