// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainView from './pages/MyBadgesSetting';
import Profile from './pages/Profile';
import MyBadges from './pages/MyBadges';
import MyBadgesSetting from './pages/MyBadgesSetting';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/badge" element={<MyBadges />} />
                <Route path="/badge/setting" element={<MyBadgesSetting />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
