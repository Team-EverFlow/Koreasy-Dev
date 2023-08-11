// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WordTestSheetButton from './pages/wordTest/WordTestSheetButton';
import Quiz from './pages/wordTest/WordTestSheet';
import WordTestSheet from './pages/wordTest/WordTestQuiz';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Quiz />} />
                <Route path="/Button" element={<WordTestSheetButton />} />
                <Route path="/Sheet" element={<WordTestSheet />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
