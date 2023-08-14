import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/wordtestListStyles/LearnWords.scss';

const LearnWords = () => (
    <div className="learn-words">
        <Link to="/">
            <button className="learn-words-button">Learn Words</button>
        </Link>
    </div>
);

export default LearnWords;
