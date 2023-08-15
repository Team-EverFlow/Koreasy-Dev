import React from 'react';
import { Link } from 'react-router-dom';

import LearnTodayWord from './LearnTodayWord.jsx';
import StartThumbnail from './StartThumbnail.jsx';
import WordCardText from '../../components/WordCardText.jsx';
import Chevrion from '../../components/Chevrion.jsx';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

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
                        <div className="title-more">more</div>
                    </div>
                    <div className="words">
                        <div
                            id="carouselExampleAutoplaying"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card-margin">
                                        <WordCardText
                                            word={{
                                                krWord: 'test',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-margin">
                                        <WordCardText />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card-margin">
                                        <WordCardText />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="prev"
                            >
                                <Chevrion direction="Left" />
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleAutoplaying"
                                data-bs-slide="next"
                            >
                                <Chevrion />
                            </button>
                        </div>
                    </div>
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
