import React from 'react';
import GoToTest from './GoToTest';
import LearnWords from './LearnWords';

function WordtestTitle({ test, date }) {
    return (
        <div className="word-test-main-container">
            <div className="word-test-list-title">
                <p className="big-title">{test}</p>
                <p className="small-title">{date}</p>
            </div>
            <div className="babo">
                <GoToTest />
                <LearnWords />
            </div>
        </div>
    );
}

export default WordtestTitle;
