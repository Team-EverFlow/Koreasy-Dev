import React, { useState } from 'react';

import Comment from './Comment';
import AddComment from './AddComment';
import WordCardText from '../../components/WordCardText';
import Header from '../../components/Header';

import wordCommentDump from '../../dummyData/wordCommentDump';

import '../../styles/wordCommunityPage/WordCommunityView.scss';

function WordCommunityView() {
    const [wordComment, setWordComment] = useState({ ...wordCommentDump });

    function reload() {
        // setWordComment();
        // featch server data
    }

    return (
        <>
            <Header isNavigationBar={true} navigationViewName="사과" />
            <div className="community-background">
                <div className="community-word-info">
                    <WordCardText />
                </div>

                <div className="community-comment">
                    {Object.keys(wordComment.wordCommentList).map(
                        (_, index) => (
                            <Comment
                                key={index}
                                wordComment={wordComment.wordCommentList[index]}
                            />
                        ),
                    )}
                </div>

                <AddComment />
            </div>
        </>
    );
}

export default WordCommunityView;
