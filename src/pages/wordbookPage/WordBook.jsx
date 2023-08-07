import React from 'react';
import '../../styles/WordBook.scss';
import ProfileIcon from '../../assets/Profile.svg';
import TabBarItem from '../../assets/TabBarItem.svg';
import Line from '../../assets/Line.svg';
import { Link } from 'react-router-dom';
import DummyData from './DummyData.js';

/**
 * @typedef {Object} ContentDataItem
 * @property {string} dateText - Date text.
 * @property {string} dateRange - Date range.
 */

/**
 * @type {ContentDataItem[]}
 */

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
                {DummyData.map((content, index) => (
                    <Link
                        to={`/WordWeek${index}`}
                        key={index}
                        className="dateitem-container"
                    >
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Wordbook;
