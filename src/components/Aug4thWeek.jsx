import React from 'react';
import './Aug4thWeek.scss';
import NavigationBar from '../assets/NavigationBar.svg';
import ProfileIcon from '../assets/Profile.svg';
import BookmarkIcon from './BookmarkIcon';
import Line from '../assets/Line.svg';

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
        <div className="Container">
            <div className="Header">
                <div className="ServiceName">
                    Koreasy
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="ProfileIcon"
                    />
                </div>
            </div>
            <div className="Previous">
                <div className="NavigationBarItem">
                    <img
                        src={NavigationBar}
                        alt="Navigation"
                        className="NavigationBar"
                    />
                    <div className="NavigationText">WordBook</div>
                </div>
                <div className="Frame" />
            </div>
            <div className="Space" />
            <div className="PageTitle">ViewName</div>
            <div className="Content">
                {contentData.map((content, index) => (
                    <React.Fragment key={index}>
                        <div
                            key={index}
                            className="Item"
                            style={{ top: `${index * 135}px` }}
                        >
                            <div className="ItemState">
                                <div className="ItemInfo">
                                    <div className="ItemStandard">
                                        <div className="ItemName">
                                            {content.name}
                                        </div>
                                        <div className="Pronunciation">
                                            {content.pronunciation}
                                        </div>
                                    </div>
                                    <div className="ItemType">
                                        {content.type}
                                    </div>
                                </div>
                                <div className="Example">
                                    <div className="ItemExample">
                                        About Word
                                    </div>
                                </div>
                            </div>
                            <div className="BookmarkIcon">
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
                        <img className="LineWeek" src={Line} alt="Line" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Aug4thWeek;
