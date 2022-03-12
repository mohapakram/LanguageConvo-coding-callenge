import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;