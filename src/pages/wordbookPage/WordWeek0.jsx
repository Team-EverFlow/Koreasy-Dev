import React, { useState } from 'react';
import Header from '../../components/Header';
import '../../styles/WordWeek0.scss';
import BookmarkIcon from './BookmarkIcon';
import Line from '../../assets/Line.svg';
import WordData from './WordData.js';
import ExampleSentence from './ExampleSentence';

const WordWeek0 = () => {
    const [visibleExamples, setVisibleExamples] = useState([]);

    const handleExampleToggle = wordId => {
        if (visibleExamples.includes(wordId)) {
            setVisibleExamples(visibleExamples.filter(id => id !== wordId));
        } else {
            setVisibleExamples([...visibleExamples, wordId]);
        }
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
                                <div className="example">
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
                                </div>
                            </div>
                            <div className="bookmark-icon">
                                <BookmarkIcon wordId={content.wordId} />
                            </div>
                        </div>
                        {isVisible(content.wordId) && (
                            <ExampleSentence
                                wordId={content.wordId}
                                exampleSentences={content.exampleSentence}
                            />
                        )}
                        <img className="line-week" src={Line} alt="Line" />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default WordWeek0;
