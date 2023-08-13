// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from './pages/MyBadgesSetting';
import Profile from './pages/Profile';
import MyBadges from './pages/MyBadges';
import MyBadgesSetting from './pages/MyBadgesSetting';
import WordBook from './pages/wordbookPage/WordBook';
import WordWeek0 from './pages/wordweekPage/WordWeek0';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/badge" element={<MyBadges />} />
                <Route path="/badge/setting" element={<MyBadgesSetting />} />
                <Route path="/wordbook" element={<WordBook />} />
                <Route path="/wordweek0" element={<WordWeek0 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
