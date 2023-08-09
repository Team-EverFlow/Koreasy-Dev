import React from 'react';
import { Link } from 'react-router-dom';

const LearnWords = () => (
    <div className="learn-words">
        <Link to="/Learnwords">
            <button className="learn-button">Learn Words</button>
        </Link>
    </div>
);

export default LearnWords;
