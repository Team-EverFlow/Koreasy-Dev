import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Comment from './Comment';
import AddComment from './AddComment';
import WordCardText from '../../components/WordCardText';
import Header from '../../components/Header';

import wordCommentDump from '../../dummyData/wordCommentDump';
import { GetWordUsingId, CreateComment } from '../../firebase/api/wordAPI';

import '../../styles/wordCommunityPage/WordCommunityView.scss';

function WordCommunityView() {
    const [serchParams, setSearchParams] = useSearchParams();
    const id = serchParams.get('id');
    const [wordComment, setWordComment] = useState({ ...wordCommentDump });

    function reload(textValue, setText) {
        //버튼 실행 조건(텍스트 카운트)
        if (textValue.length <= 250 || textValue.length > 0) {
            setText('');
            CreateComment(id, textValue).then(result => {
                console.log(result, result.error, id);
            });
            window.location.reload();
        }
    }

    useEffect(() => {
        GetWordUsingId(id).then(result => {
            if (result.success) {
                setWordComment({ ...result.data });
            }
        });
    }, []);
    console.log(wordComment);
    return (
        <>
            <Header isNavigationBar={true} navigationViewName="사과" />
            <div className="community-background">
                <div className="community-word-info">
                    <WordCardText />
                </div>

                <div className="community-comment">
                    {Object.keys(wordComment.comments).map((_, index) => (
                        <Comment
                            key={index}
                            wordComment={wordComment.comments[index]}
                        />
                    ))}
                </div>

                <AddComment uploadButton={reload} />
            </div>
        </>
    );
}

export default WordCommunityView;
