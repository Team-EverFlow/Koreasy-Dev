import React, { useEffect, useState } from 'react';
import Header from '../../components/Header.jsx';
import '../../styles/wordweekStyles/WordWeek.scss';
import WordExampleSentence from '../wordweekPage/WordExampleSentence.jsx';
import WordExampleToggle from '../wordweekPage/WordExampleToggle.jsx';
import Divider from '../../components/Divider.jsx';
import Bookmark from '../../components/Bookmark.jsx';
import UserInformation from '../../dummyData/UserInformation.js';
import { GetWordList } from '../../firebase/api/wordAPI';

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

    const [wordList, setWordList] = useState([]);
    useEffect(() => {
        GetWordList().then(result => {
            if (result.success) {
                setWordList(
                    result.data.filter(word => {
                        return UserInformation.bookmark.some(
                            item => item.id === word.id,
                        );
                    }),
                );
            }
        });
    }, []);

    return (
        <div className="wordweek-container">
            <Header isNavigationBar={true} viewName="Bookmark" />
            <div className="content">
                {wordList.map((content, index) => (
                    <React.Fragment key={content.id}>
                        <div
                            key={content.id}
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
                                            handleExampleToggle(content.id)
                                        }
                                    >
                                        {isVisible(content.id)
                                            ? 'Hide'
                                            : 'About Word'}
                                    </div>
                                </button>
                            </div>
                            <div className="bookmark-icon">
                                <Bookmark wordId={content.id} />
                            </div>
                        </div>
                        {isVisible(content.id) && (
                            <WordExampleSentence
                                wordId={content.id}
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
