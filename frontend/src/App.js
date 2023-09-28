// Layout.js
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
