import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/wordtestSheetPage/WordTestTitle.scss';
import TestData from '../../dummyData/TestData';

const WordTestTitle = ({ mainTitle, subTitle }) => {
    return (
        <div className="test-title-container">
            <div className="test-title-item">
                <div className="main-title">{mainTitle}</div>
                <div className="sub-title">{subTitle}</div>
            </div>
        </div>
    );
};

export default WordTestTitle;
