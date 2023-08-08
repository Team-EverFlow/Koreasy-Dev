import React from 'react';
import LearnTodayWord from './LearnTodayWord.jsx';
import StartThumbnail from './StartThumbnail.jsx';
import WordCardText from './WordCardText.jsx';
import '../../styles/MainPage.scss';

import Chevrion from '../../components/Chevrion.jsx';

function MainPage() {
    return (
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
                    <div id="carouselExample" className="carousel slide">
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
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                        >
                            <Chevrion direction="Left" />
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                        >
                            <Chevrion />
                        </button>
                    </div>
                </div>
                <a
                    className="stats link-offset-2 link-underline link-underline-opacity-0"
                    href="."
                >
                    <div className="stats-text">Check my stats</div>
                    <Chevrion color="MainColor" />
                </a>
                <a
                    className="stats link-offset-2 link-underline link-underline-opacity-0"
                    href="."
                >
                    <div className="stats-text">View my badges</div>
                    <Chevrion color="MainColor" />
                </a>
            </div>
        </div>
    );
}

export default MainPage;
