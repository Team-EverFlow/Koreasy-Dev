import React from 'react';
import LearnWords from './LearnWords';
import GoToTest from './GoToTest';
import '../../styles/wordtestListStyles/WordTestCell.scss';
import moment from 'moment';
import { ordinalSuffix } from '../../utils/ordinalSuffix';

/**
 * @param {string} id
 * @param {string} title
 * @param {Date} date
 * @returns {JSX.Element}
 */
const WordTestCell = ({ id, title, date }) => {
    const dateToString = moment(date).format('MMM YYYY');
    const weekInMonth = Math.floor(date.getDate() / 7) + 1;
    return (
        <div className="word-test-main-container">
            <div className="word-test-list-title">
                <div className="big-title">{title}</div>
                <div className="small-title">{`${ordinalSuffix(
                    weekInMonth,
                )} week, ${dateToString}`}</div>
            </div>
            <div className="word-test-button-set">
                <GoToTest id={id} />
                <LearnWords />
            </div>
        </div>
    );
};

export default WordTestCell;
