import React, { useEffect, useState } from 'react';
import Header from '../../components/Header.jsx';
import '../../styles/wordbookStyles/WordBook.scss';
import { Link } from 'react-router-dom';
import DateData from '../../dummyData/DateData.js';
import Divider from '../../components/Divider.jsx';
import Chevrion from '../../components/Chevrion.jsx';
import { GetWordList } from '../../firebase/api/wordAPI';
import moment from 'moment';
import { ordinalSuffix } from '../../utils/ordinalSuffix';

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
                                new Date(firstDay).setDate(
                                    firstDay.getDate() + 6,
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
                                          moment: moment(firstDay),
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
                    {wordbook.map((content, index) => {
                        const dateToString = content.moment.format('MMM YYYY');
                        const wordbook = {
                            title: `${ordinalSuffix(
                                content.weekend,
                            )} week, ${dateToString}`,
                            range: `${moment(content.firstDay).format(
                                'YYYY.MM.DD',
                            )}~
                            ${moment(content.lastDay).format('MM.DD')}`,
                        };
                        return (
                            <Link
                                to="/wordweek"
                                state={{
                                    firstDay: content.firstDay,
                                    lastDay: content.lastDay,
                                }}
                                key={index}
                                className="dateitem-container"
                            >
                                <div className="date-item">
                                    <div className="date-info">
                                        <span className="date-text">
                                            {wordbook.title}
                                        </span>
                                        <span className="date-range">
                                            {wordbook.range}
                                        </span>
                                    </div>
                                    <Chevrion
                                        direction="Right"
                                        color="MainColor"
                                    />
                                </div>
                                <Divider />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WordBook;
