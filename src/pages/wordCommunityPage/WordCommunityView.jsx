import React from 'react';

import Comment from './Comment';
import AddComment from './AddComment';
import WordCardText from '../../components/WordCardText';

import '../../styles/wordCommunityPage/WordCommunityView.scss';
import wordData from './wordData';

function WordCommunityView() {
    const data = wordData;
    return (
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
    );
}

export default WordCommunityView;
