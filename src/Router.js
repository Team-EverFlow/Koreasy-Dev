// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordTestSheetButton from './pages/wordTest/WordTestSheetButton';
import Quiz from './pages/wordTest/WordTestQuiz';
import WordtestSheet from './pages/wordTest/WordTestSheet';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/Button" element={<WordTestSheetButton />} />
                <Route path="/Sheet" element={<WordtestSheet />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
