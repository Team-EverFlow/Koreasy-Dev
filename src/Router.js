// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from './pages/mainView/MainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
