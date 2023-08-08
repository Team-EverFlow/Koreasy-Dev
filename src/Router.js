// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Header';
import Wordbook from './pages/wordbookPage/WordBook';
import WordWeek0 from './pages/wordbookPage/WordWeek0';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/wordbook" element={<Wordbook />} />
                <Route path="/wordweek0" element={<WordWeek0 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
