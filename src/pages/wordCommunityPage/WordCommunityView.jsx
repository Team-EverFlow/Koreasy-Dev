import React from 'react';

import Comment from './Comment';
import AddComment from './AddComment';
import WordCardText from '../../components/WordCardText';
import Header from '../../components/Header';
import wordData from './wordData';

import '../../styles/wordCommunityPage/WordCommunityView.scss';

function WordCommunityView() {
    const data = wordData;
    return (
        <>
            <Header />
            <div className="community-background">
                <div className="community-word-info">
                    <WordCardText />
                </div>

                <div className="community-comment">
                    <Comment />
                    <Comment />
                </div>

                <AddComment />
            </div>
        </>
    );
}

export default WordCommunityView;
