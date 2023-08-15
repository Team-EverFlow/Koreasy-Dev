import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainView from './pages/mainView/MainPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MyBadges from './pages/mybadge/MyBadges';
import MyBadgesSetting from './pages/mybadge/MyBadgesSetting';
import WordBook from './pages/wordbookPage/WordBook';
import WordWeek from './pages/wordweekPage/WordWeek';
import WordTestList from './pages/wordTest/WordTestList';
import TodayWord from './pages/todayWordPage/TodayWordView';

const Router = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<MainView />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/badge" element={<MyBadges />} />
                <Route
                    path="/profile/badge/setting"
                    element={<MyBadgesSetting />}
                />
                <Route path="/wordbook" element={<WordBook />} />
                <Route path="/wordweek" element={<WordWeek />} />
                <Route path="/todayword" element={<TodayWord />} />
                <Route path="/testList" element={<WordTestList />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
