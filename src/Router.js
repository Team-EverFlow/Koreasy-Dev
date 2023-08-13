// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Header';
import WordBook from './pages/wordbookPage/WordBook';
import WordWeek0 from './pages/wordweekPage/WordWeek0';
import MainView from './pages/MyBadgesSetting';
import Profile from './pages/Profile';
import MyBadges from './pages/MyBadges';
import MyBadgesSetting from './pages/MyBadgesSetting';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/wordbook" element={<WordBook />} />
                <Route path="/wordweek0" element={<WordWeek0 />} />

                <Route path="/" element={<MainView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/badge" element={<MyBadges />} />
                <Route path="/badge/setting" element={<MyBadgesSetting />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
