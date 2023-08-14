import React from 'react';
import '../../styles/wordtestSheetPage/WordTestSheet.scss';
import Header from '../../components/Header';
import WordTestTitle from './WordTestTitle';
import WordTestQuiz from './WordTestQuiz';
import WordTestCheckOut from './WordTestCheckOut';
import WordTestScore from './WordTestScore';
import WordTestResult from './WordTestResult';

const WordtestQuiz = () => {
    const dateText = '1st week, Aug 2023';
    return (
        <div className="wordtestsheet-page">
            <Header isNavigationBar={false} />
            <div className="wordtestsheet-container">
                <WordTestTitle dateText={dateText} />
                <WordTestQuiz />
                <WordTestCheckOut />
                <WordTestScore />
                <WordTestResult />
            </div>
        </div>
    );
};

export default WordtestQuiz;
