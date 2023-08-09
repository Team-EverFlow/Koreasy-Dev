// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordTestList from './pages/wordTest/WordTestList';
// import Takeatest from './pages/Wordtest/Takeatest';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Login />} /> */}
                <Route path="/" element={<WordTestList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
