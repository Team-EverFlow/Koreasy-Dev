// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/dump';
import Wordbook from './pages/wordbookPage/WordBook';
import Aug4thWeek from './pages/wordbookPage/Aug4thWeek';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/wordbook" element={<Wordbook />} />
                <Route path="/aug4thweek" element={<Aug4thWeek />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
