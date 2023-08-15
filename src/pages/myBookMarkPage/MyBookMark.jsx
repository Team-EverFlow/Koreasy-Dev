import React, { useState } from 'react';
import Header from '../../components/Header.jsx';
import '../../styles/wordweekStyles/WordWeek.scss';
import WordData from '../../dummyData/WordData.js';
import WordExampleSentence from '../wordweekPage/WordExampleSentence.jsx';
import WordExampleToggle from '../wordweekPage/WordExampleToggle.jsx';
import Divider from '../../components/Divider.jsx';
import Bookmark from '../../components/Bookmark.jsx';
import UserInformation from '../../dummyData/UserInformation.js';

const MyBookMark = () => {
    const [visibleExamples, setVisibleExamples] = useState([]);

    const handleExampleToggle = wordId => {
        const updatedVisibleExamples = WordExampleToggle(
            visibleExamples,
            wordId,
        );
        setVisibleExamples(updatedVisibleExamples);
    };

    const isVisible = wordId => {
        return visibleExamples.includes(wordId);
    };

    const filteredWordData = WordData.filter(word => {
        return UserInformation.bookmark.some(
            item => item.wordId === word.wordId,
        );
    });

    return (
        <div className="wordweek-container">
            <Header isNavigationBar={true} viewName="ViewName" />
            <div className="content">
                {filteredWordData.map((content, index) => (
                    <React.Fragment key={content.wordId}>
                        <div
                            key={content.wordId}
                            className="item"
                            style={{ top: `${index * 135}px` }}
                        >
                            <div className="item-state">
                                <div className="item-info">
                                    <div className="item-standard">
                                        <div className="item-name">
                                            {content.wordKr}
                                        </div>
                                        <div className="pronunciation">
                                            {content.pronunciation}
                                        </div>
                                    </div>
                                    <div className="item-type">
                                        {content.meaning}
                                    </div>
                                </div>
                                <button className="example">
                                    <div
                                        className="item-example"
                                        onClick={() =>
                                            handleExampleToggle(content.wordId)
                                        }
                                    >
                                        {isVisible(content.wordId)
                                            ? 'Hide'
                                            : 'About Word'}
                                    </div>
                                </button>
                            </div>
                            <div className="bookmark-icon">
                                <Bookmark wordId={content.wordId} />
                            </div>
                        </div>
                        {isVisible(content.wordId) && (
                            <WordExampleSentence
                                wordId={content.wordId}
                                exampleSentences={content.exampleSentence}
                            />
                        )}
                        <Divider />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MyBookMark;
