import React from 'react';
import '../../styles/wordtestSheetPage/WordTestScore.scss';

const WordTestScore = () => {
    return (
        <div className="wordtestscore-container">
            <div className="wordtestscore-grade">8/10</div>
            <div className="wordtestscore-text">Right answers</div>
            <div className="wordtestscore-good">🎉 Good Job!</div>
        </div>
    );
};

export default WordTestScore;
