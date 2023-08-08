// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordTestSheetButton from './pages/Wordtest/WordTestSheetButton';
import Quiz from './pages/Wordtest/WordTestQuiz';
import WordtestSheet from './pages/Wordtest/WordTestQuiz';

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
