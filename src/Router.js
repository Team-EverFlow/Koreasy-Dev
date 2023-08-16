import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainView from './pages/mainView/MainPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MyBadges from './pages/mybadge/MyBadges';
import MyBadgesSetting from './pages/mybadge/MyBadgesSetting';
import WordBook from './pages/wordbookPage/WordBook';
import WordWeek from './pages/wordweekPage/WordWeek';
import WordTestList from './pages/wordtestListPage/WordTestList';
import TodayWord from './pages/todayWordPage/TodayWordView';
import WordCommunity from './pages/wordCommunityPage/WordCommunityView';
import MyBookMark from './pages/myBookMarkPage/MyBookMark';
import WordTestSheet from './pages/wordtestSheetPage/WordTestSheet';

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
                <Route path="/mybookmark" element={<MyBookMark />} />
                <Route path="/todayword" element={<TodayWord />} />
                <Route path="/todayword/reply" element={<WordCommunity />} />
                <Route path="/testList" element={<WordTestList />} />
                <Route path="/testWord" element={<WordTestSheet />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
