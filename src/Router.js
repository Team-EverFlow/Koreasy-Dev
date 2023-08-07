// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
