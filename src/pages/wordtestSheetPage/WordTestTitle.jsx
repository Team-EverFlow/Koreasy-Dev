import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/wordtestSheetPage/WordTestTitle.scss';
import TestData from '../../dummyData/TestData';

const WordTestTitle = ({ dateText }) => {
    const currentTestData = TestData.find(data => data.dateText === dateText);

    if (!currentTestData) {
        return null;
    }

    return (
        <div className="test-title-container">
            <div className="test-title-item">
                <div className="main-title">{currentTestData.mainTitle}</div>
                <div className="sub-title">{currentTestData.subTitle}</div>
            </div>
        </div>
    );
};

WordTestTitle.propTypes = {
    dateText: PropTypes.string.isRequired,
};

export default WordTestTitle;
