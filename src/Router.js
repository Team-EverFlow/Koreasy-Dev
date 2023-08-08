// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodayWordView from './pages/todayWordView/TodayWordPage';
import MainView from './pages/mainView/MainPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/Main" element={<TodayWordView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
