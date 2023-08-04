// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DumpView from './components/dump';
import TodayWordView from './pages/todayWordView/todayWordView';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DumpView />} />
                <Route path="/Main" element={<TodayWordView />} />
                <Route path="/TodayWord" element={<DumpView />} />
                <Route path="/Profile" element={<DumpView />} />
                <Route path="/WordTest" element={<DumpView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
