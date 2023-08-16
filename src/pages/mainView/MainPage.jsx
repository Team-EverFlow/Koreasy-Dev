import React from 'react';
import { Link } from 'react-router-dom';

import LearnTodayWord from './LearnTodayWord.jsx';
import StartThumbnail from './StartThumbnail.jsx';
import Chevrion from '../../components/Chevrion.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import AutoScrollWord from './AutoScrollWord.jsx';

import '../../styles/MainPage.scss';

function MainPage() {
    return (
        <>
            <Header />
            <div className="main-frame">
                <LearnTodayWord language="kr" />
                <div className="start-thumbnail-frame">
                    <StartThumbnail startText="bookmark" />
                    <StartThumbnail />
                </div>
                <div className="recent-word">
                    <div className="title">
                        <div className="title-header">Recent Korean Words</div>
                        <Link
                            to="./wordbook"
                            className="title-more link-offset-2 link-underline link-underline-opacity-0"
                        >
                            more
                        </Link>
                    </div>
                    <AutoScrollWord />
                    <Link
                        className="stats link-offset-2 link-underline link-underline-opacity-0"
                        to="./profile/badge"
                    >
                        <div className="stats-text">View my badges</div>
                        <Chevrion color="MainColor" />
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MainPage;
