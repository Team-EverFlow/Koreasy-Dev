import React from 'react';
import Header from '../../components/Header.jsx';
import '../../styles/wordbookStyles/WordBook.scss';
import { Link } from 'react-router-dom';
import DateData from '../../dummyData/DateData.js';
import Divider from '../../components/Divider.jsx';
import Chevrion from '../../components/Chevrion.jsx';

const WordBook = () => {
    return (
        <div className="wordbook-container">
            <div className="wordbook-container">
                <Header isNavigationBar={false} viewName="ViewName" />
                <div className="date-section">
                    {DateData.map((content, index) => (
                        <Link
                            to={{
                                pathname: '/wordweek',
                                state: { wordIdList: content.wordIdList },
                            }}
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
                                <Chevrion direction="Right" color="MainColor" />
                            </div>
                            <Divider />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WordBook;
