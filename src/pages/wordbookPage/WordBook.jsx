import React from 'react';
import '../../styles/WordBook.scss';
import ProfileIcon from '../../assets/Profile.svg';
import TabBarItem from '../../assets/TabBarItem.svg';
import Line from '../../assets/Line.svg';

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
        <div className="wordbook-container">
            <div className="wordbook-header">
                <div className="service-name">
                    Koreasy
                    <img
                        src={ProfileIcon}
                        alt="Profile"
                        className="profile-icon"
                    />
                </div>
            </div>
            <div className="space" />
            <div className="page-title">ViewName</div>
            <div className="date-section">
                {contentData.map((content, index) => (
                    <div key={index} className="dateitem-container">
                        <div className="date-item">
                            <div className="date-info">
                                <span className="date-text">
                                    {content.dateText}
                                </span>
                                <span className="date-range">
                                    {content.dateRange}
                                </span>
                            </div>
                            <img
                                className="tabbar-item"
                                src={TabBarItem}
                                alt="front"
                            />
                        </div>
                        <img className="line" src={Line} alt="Line" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wordbook;
