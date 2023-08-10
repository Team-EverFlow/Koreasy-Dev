// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordTestList from './pages/wordTest/WordTestList';
import TestPageGoToTest from './pages/wordTest/TestPageGoToTest';
import TestPageLearnWords from './pages/wordTest/TestPageLearnWords';
import Login from './pages/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<WordTestList />} />
                <Route
                    path="/TestPageGoToTest"
                    element={<TestPageGoToTest />}
                />
                <Route
                    path="/TestPageLearnWords"
                    element={<TestPageLearnWords />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
