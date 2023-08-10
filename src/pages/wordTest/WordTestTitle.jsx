import React from 'react';
import LearnWords from './LearnWords';
import GoToTest from './GoToTest';
import '../../styles/WordTestTitle.scss';

const WordTestTitle = ({ test, date }) => {
    return (
        <div className="word-test-main-container">
            <div className="word-test-list-title">
                <div className="big-title">{test}</div>
                <div className="small-title">{date}</div>
            </div>
            <div className="word-test-button-set">
                <GoToTest />
                <LearnWords />
            </div>
        </div>
    );
};

export default WordTestTitle;
