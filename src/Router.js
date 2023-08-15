// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from './pages/MyBadgesSetting';
import Profile from './pages/Profile';
import MyBadges from './pages/MyBadges';
import MyBadgesSetting from './pages/MyBadgesSetting';
import Login from './pages/Login';
import WordTestList from './pages/wordTest/WordTestList';
import TestPageGoToTest from './pages/wordTest/TestPageGoToTest';
import TestPageLearnWords from './pages/wordTest/TestPageLearnWords';
import WordBook from './pages/wordbookPage/WordBook';
import WordWeek from './pages/wordweekPage/WordWeek';

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

                <Route path="/" element={<MainView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/badge" element={<MyBadges />} />
                <Route path="/badge/setting" element={<MyBadgesSetting />} />
                <Route path="/wordbook" element={<WordBook />} />
                <Route path="/wordweek" element={<WordWeek />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
