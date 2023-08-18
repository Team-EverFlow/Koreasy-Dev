import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/wordtestSheetPage/WordTestResult.scss';

const WordTestResult = () => {
    return (
        <div className="wordtestresult-container">
            <div className="wordtestresult-learn">
                <Link
                    className="wordtestresult-learn-text link-offset-2 link-underline link-underline-opacity-0"
                    to="../wordbook"
                >
                    Learn more words
                </Link>
            </div>
        </div>
    );
};

export default WordTestResult;
