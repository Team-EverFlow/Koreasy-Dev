import React from 'react';
import '../../styles/WordWeek0.scss';
import NavigationBar from '../../assets/NavigationBar.svg';
import ProfileIcon from '../../assets/Profile.svg';
import BookmarkIcon from './BookmarkIcon';
import Line from '../../assets/Line.svg';

const contentData = [
    {
        name: '사과',
        pronunciation: '[sagua]',
        type: 'noun - Apple',
    },
    {
        name: '사과',
        pronunciation: '[sagua]',
        type: 'noun - Apple',
    },
    {
        name: '사과',
        pronunciation: '[sagua]',
        type: 'noun - Apple',
    },
];

const WordWeek0 = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="service-name">
                    Koreasy
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="profile-icon"
                    />
                </div>
            </div>
            <div className="previous">
                <div className="navigationbar-item">
                    <img
                        src={NavigationBar}
                        alt="Navigation"
                        className="navigation-bar"
                    />
                    <div className="navigation-text">WordBook</div>
                </div>
                <div className="frame" />
            </div>
            <div className="space" />
            <div className="page-title">ViewName</div>
            <div className="content">
                {contentData.map((content, index) => (
                    <React.Fragment key={index}>
                        <div
                            key={index}
                            className="item"
                            style={{ top: `${index * 135}px` }}
                        >
                            <div className="item-state">
                                <div className="item-info">
                                    <div className="item-standard">
                                        <div className="item-name">
                                            {content.name}
                                        </div>
                                        <div className="pronunciation">
                                            {content.pronunciation}
                                        </div>
                                    </div>
                                    <div className="item-type">
                                        {content.type}
                                    </div>
                                </div>
                                <div className="example">
                                    <div className="item-example">
                                        About Word
                                    </div>
                                </div>
                            </div>
                            <div className="bookmark-icon">
                                <BookmarkIcon
                                    onClick={isClicked => {
                                        console.log(
                                            'Bookmark Icon Clicked:',
                                            isClicked,
                                        );
                                    }}
                                />
                            </div>
                        </div>
                        <img className="line-week" src={Line} alt="Line" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default WordWeek0;
