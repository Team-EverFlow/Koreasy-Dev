import React, { useEffect, useState } from 'react';
import Header from '../../components/Header.jsx';
import '../../styles/wordbookStyles/WordBook.scss';
import { Link } from 'react-router-dom';
import DateData from '../../dummyData/DateData.js';
import Divider from '../../components/Divider.jsx';
import Chevrion from '../../components/Chevrion.jsx';
import { GetWordList } from '../../firebase/api/wordAPI';
import moment from 'moment';

const WordBook = () => {
    const getMonthWeek = function (date) {
        const firstDay = new Date(
            date.getFullYear(),
            date.getMonth(),
            1,
        ).getDay();
        return Math.ceil((date.getDate() + firstDay) / 7);
    };

    const getSunday = d => {
        d = new Date(d);
        const day = d.getDay() + 1;
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(d.setDate(diff));
    };

    const [wordbook, setWordbook] = useState([]);
    useEffect(() => {
        GetWordList().then(result => {
            if (result.success) {
                result.data
                    .sort((a, b) => a.addedTime.toDate() - b.addedTime.toDate())
                    .map(word => {
                        const addedTime = word.addedTime.toDate();
                        setWordbook(prevState => {
                            const monthWeek = getMonthWeek(addedTime);
                            const firstDay = getSunday(addedTime);
                            const lastDay = new Date(
                                new Date(addedTime).setDate(
                                    addedTime.getDate() + 6,
                                ),
                            );
                            return !prevState.some(
                                wordbook =>
                                    wordbook.weekOfYear ===
                                    moment(addedTime).week(),
                            )
                                ? [
                                      ...prevState,
                                      {
                                          firstDay: firstDay,
                                          lastDay: lastDay,
                                          weekend: monthWeek,
                                          month: firstDay.getMonth(),
                                          weekOfYear: moment(firstDay).week(),
                                      },
                                  ]
                                : prevState;
                        });
                    });
            }
        });
    });
    return (
        <div className="wordbook-container">
            <div className="wordbook-container">
                <Header isNavigationBar={false} viewName="WordBook" />
                <div className="date-section">
                    {DateData.map((content, index) => (
                        <Link
                            to="/wordweek"
                            state={{ wordIdList: content.wordIdList }}
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
