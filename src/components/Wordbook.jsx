import React from 'react';
import './Wordbook.scss';
import ProfileIcon from '../assets/Profile.svg';
import TabBarItem from '../assets/TabBarItem.svg';
import Line from '../assets/Line.svg';

/**
 * @typedef {Object} ContentDataItem
 * @property {string} dateText - Date text.
 * @property {string} dateRange - Date range.
 */

/**
 * @type {ContentDataItem[]}
 */

const contentData = [
    {
        dateText: '4th week, Aug',
        dateRange: '2023.08.21 ~ 08.25',
    },
    {
        dateText: '3rd week, Aug',
        dateRange: '2023.08.14 ~ 08.18',
    },
    {
        dateText: '2nd week, Aug',
        dateRange: '2023.08.07 ~ 08.11',
    },
    {
        dateText: '1st week, Aug',
        dateRange: '2023.07.31 ~ 08.04',
    },
    {
        dateText: '4th week, Jul',
        dateRange: '2023.07.24 ~ 07.28',
    },
];

/**
 * @returns {JSX.Element}
 */

const Wordbook = () => {
    return (
        <div className="WordbookContainer">
            <div className="WordbookHeader">
                <div className="ServiceName">
                    Koreasy
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="ProfileIcon"
                    />
                </div>
            </div>
            <div className="Space" />
            <div className="PageTitle">ViewName</div>
            <div className="DateSection">
                {contentData.map((content, index) => (
                    <div key={index} className="DateItemContainer">
                        <div className="DateItem">
                            <div className="DateInfo">
                                <span className="DateText">
                                    {content.dateText}
                                </span>
                                <span className="DateRange">
                                    {content.dateRange}
                                </span>
                            </div>
                            <img
                                className="TabBarItem"
                                src={TabBarItem}
                                alt="Front"
                            />
                        </div>
                        <img className="Line" src={Line} alt="Line" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wordbook;
