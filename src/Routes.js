import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './Components/App/App'
const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesComponent;