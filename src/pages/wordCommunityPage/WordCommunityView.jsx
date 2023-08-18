import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Comment from './Comment';
import AddComment from './AddComment';
import WordCardText from '../../components/WordCardText';
import Header from '../../components/Header';

// import wordCommentDump from '../../dummyData/wordCommentDump';
import {
    GetWordUsingId,
    CreateComment,
    GetCommentsFromWord,
} from '../../firebase/api/wordAPI';

import '../../styles/wordCommunityPage/WordCommunityView.scss';
import { GetCurrentUserInformation } from '../../firebase/api/userAPI';

function WordCommunityView() {
    const [serchParams, setSearchParams] = useSearchParams();
    const id = serchParams.get('id');
    const [wordCard, setWordCard] = useState([]);
    const [wordComment, setWordComment] = useState([]);
    const [user, setUser] = useState(undefined);

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
                setWordCard(result.data);
            } else {
                console.log(result.error);
            }
        });
        GetCommentsFromWord(id).then(result => {
            if (result.success) {
                setWordComment(result.data);
            } else {
                console.log(result.error);
            }
        });
        GetCurrentUserInformation().then(result => {
            if (result.success) {
                setUser(result.user);
            }
        });
    }, [id]);

    let wordCommentLength = false;
    if (wordComment && Object.keys(wordComment).length !== 0) {
        console.log(wordComment, Object.keys(wordComment).length);
        wordCommentLength = true;
    } else {
        wordCommentLength = false;
    }
    console.log(wordCommentLength);
    console.log(wordComment);

    return (
        <>
            <Header
                isNavigationBar={true}
                navigationViewName={wordCard && wordCard.wordKr}
            />
            <div className="community-background">
                <div className="community-word-info">
                    <WordCardText word={wordCard} />
                </div>
                <div className="community-comment">
                    {wordCommentLength &&
                        wordComment !== undefined &&
                        wordComment.map((comment, index) => (
                            <Comment
                                key={index}
                                id={id}
                                user={user}
                                wordComment={comment}
                            />
                        ))}
                </div>

                <AddComment uploadButton={reload} />
            </div>
        </>
    );
}

export default WordCommunityView;
