import React from 'react';
import './Aug4thWeek.scss';
import ProfileIcon from '../assets/Profile.svg';
import BookmarkIcon from './BookmarkIcon';

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

const Aug4thWeek = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="company-name">
                    Koreasy
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="profile-icon"
                    />
                </div>
                <div className="separator" />
            </div>
            <div className="content">
                {contentData.map((content, index) => (
                    <div
                        key={index}
                        className="item"
                        style={{ top: `${index * 135}px` }}
                    >
                        <div className="item-info">
                            <div className="item-name">
                                {content.name}
                                <span className="pronunciation">
                                    {content.pronunciation}
                                </span>
                            </div>
                            <div className="item-type">
                                {content.type}
                                <BookmarkIcon
                                    onClick={isClicked => {
                                        console.log(
                                            'Bookmark Icon Clicked:',
                                            isClicked,
                                        );
                                    }}
                                />
                            </div>
                            <div className="item-example">
                                Example sentences
                            </div>
                        </div>
                        <div className="separator" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Aug4thWeek;
