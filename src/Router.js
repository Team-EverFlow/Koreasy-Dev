// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainView from './pages/mainView/MainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/Header" element={<Header />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
