import React from 'react';
import LearnWords from './LearnWords';
import GoToTest from './GoToTest';
import '../../styles/wordtestListStyles/WordTestCell.scss';

const WordTestCell = ({ listTitle, dateText }) => {
    const id = 'quiz1';
    return (
        <div className="word-test-main-container">
            <div className="word-test-list-title">
                <div className="big-title">{listTitle}</div>
                <div className="small-title">{dateText}</div>
            </div>
            <div className="word-test-button-set">
                <GoToTest id={id} />
                <LearnWords />
            </div>
        </div>
    );
};

export default WordTestCell;
