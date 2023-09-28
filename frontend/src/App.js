// Layout.js
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components//Login';
import Register from './components/Register';
import './styles/navbar.css';
import ProtectedRoute from './auth/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './components/Inventory';
import Inventory from './components/Inventory';
import AllSkins from './components/AllSkins';
import Offers from './components/Offers';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoute> <Navigate to="/inventory" /> </ProtectedRoute>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/logout" element={<ProtectedRoute> <Navigate to="/login" /> </ProtectedRoute>} />
                <Route exact path="/inventory" element={
                    <ProtectedRoute>
                        <Navbar />
                        <Inventory />
                    </ProtectedRoute>} />
                <Route exact path="/skins" element={
                    <ProtectedRoute>
                        <Navbar />
                        <AllSkins />
                    </ProtectedRoute>} />
                <Route exact path="/offers" element={
                    <ProtectedRoute>
                        <Navbar />
                        <Offers />
                    </ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
