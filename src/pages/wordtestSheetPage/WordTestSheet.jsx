import React, { useState } from 'react';
import '../../styles/wordtestSheetPage/WordTestSheet.scss';
import Header from '../../components/Header';
import WordTestTitle from './WordTestTitle';
import WordTestQuiz from './WordTestQuiz';
import WordTestCheckOut from './WordTestCheckOut';
import WordTestScore from './WordTestScore';
import WordTestResult from './WordTestResult';

const WordtestSheetPage = () => {
    const dateText = '1st week, Aug 2023';
    const [showScore, setShowScore] = useState(false);
    const [showResult, setShowResult] = useState(false); // 추가된 상태 값

    return (
        <div className="wordtestsheet-page">
            <Header isNavigationBar={false} />
            <div className="wordtestsheet-container">
                <WordTestTitle dateText={dateText} />
                <WordTestQuiz />
                <WordTestCheckOut />
                {showScore && <WordTestScore />}
                {showResult && <WordTestResult />}
            </div>
        </div>
    );
};

export default WordtestSheetPage;
