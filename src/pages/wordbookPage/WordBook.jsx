import React from 'react';
import Header from '../../components/Header';
import '../../styles/WordBook.scss';
import TabBarItem from '../../assets/TabBarItem.svg';
import Line from '../../assets/Line.svg';
import { Link } from 'react-router-dom';
import DateData from './DateData.js';

/**
 * @typedef {Object} ContentDataItem
 * @property {string} dateText - Date text.
 * @property {string} dateRange - Date range.
 * @property {string[]} wordId - word id
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
            <div className="wordbook-container">
                <Header isNavigationBar={false} viewName="ViewName" />
                <div className="date-section">
                    {DateData.map((content, index) => (
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
                            <img className="line-word" src={Line} alt="Line" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wordbook;
