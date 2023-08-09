// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import WordtestList from './pages/Wordtest/WordtestList';
import test1 from './pages/Wordtest/test1';
import Takeatest from './pages/Wordtest/Takeatest';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<WordtestList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
