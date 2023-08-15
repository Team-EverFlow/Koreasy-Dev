import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../styles/LearnTodayWord.scss';
import Chevrion from '../../components/Chevrion';

/**
 *
 * @param {string} language kr or en (default : en)
 * @returns
 */
function LearnTodayWord({ language }) {
    let word = { today: "today's", text: 'Korean' };
    const navigate = useNavigate();

    function goTodayWord() {
        navigate('./todayword');
    }
    if (language === 'en') {
        word.today = '오늘의';
        word.text = '한국어';
    } else {
        word = { ...word };
    }

    return (
        <div className="learntodayword-background">
            <div className="learntodayword-text">
                <div className="today-text">{word.today}</div>
                <div className="head-text">{word.text}</div>
            </div>
            <button type="button" className="btn" onClick={goTodayWord}>
                <div className="learn-text">Learn words</div>
                <Chevrion direction="Right" color="MainColor" />
            </button>
        </div>
    );
}

export default LearnTodayWord;
