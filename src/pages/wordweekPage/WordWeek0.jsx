import React, { useState } from 'react';
import Header from '../../components/Header.jsx';
import '../../styles/wordweekStyles/WordWeek0.scss';
import WordData from '../../dummyData/WordData.js';
import ExampleSentence from './ExampleSentence.jsx';
import ExampleToggle from './ExampleToggle.jsx';
import Divider from '../../components/Divider.jsx';
import Bookmark from '../../components/Bookmark.jsx';

const WordWeek0 = () => {
    const [visibleExamples, setVisibleExamples] = useState([]);

    const handleExampleToggle = wordId => {
        const updatedVisibleExamples = ExampleToggle(visibleExamples, wordId);
        setVisibleExamples(updatedVisibleExamples);
    };

    const isVisible = wordId => {
        return visibleExamples.includes(wordId);
    };

    return (
        <div className="wordweek0-container">
            <Header isNavigationBar={true} viewName="ViewName" />
            <div className="content">
                {WordData.map((content, index) => (
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
                            <ExampleSentence
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

export default WordWeek0;
