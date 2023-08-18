import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Comment from './Comment';
import AddComment from './AddComment';
import WordCardText from '../../components/commentWordCardText';
import Header from '../../components/Header';

// import wordCommentDump from '../../dummyData/wordCommentDump';
import {
    GetWordUsingId,
    CreateComment,
    GetCommentsFromWord,
} from '../../firebase/api/wordAPI';
import { GetCurrentUserFromFirebase } from '../../firebase/api/userAPI';

import BadgeNotificationGenerator from '../../components/BadgeNotificationGenerator.jsx';
import { REPLIES_ACHIEVEMENT_EVENT_NAME } from '../../types/const.js';
import '../../styles/wordCommunityPage/WordCommunityView.scss';
import { GetCurrentUserInformation } from '../../firebase/api/userAPI';
import { Timestamp } from 'firebase/firestore';

function WordCommunityView() {
    const [serchParams, setSearchParams] = useSearchParams();
    const id = serchParams.get('id');
    const [wordCard, setWordCard] = useState([]);
    const [wordComment, setWordComment] = useState([]);
    const [user, setUser] = useState(undefined);
    const BadgeComponent = BadgeNotificationGenerator(
        REPLIES_ACHIEVEMENT_EVENT_NAME,
    );

    function uploadComment(textValue, setText) {
        //버튼 실행 조건(텍스트 카운트)
        if (textValue.length <= 250 || textValue.length > 0) {
            CreateComment(id, textValue).then(result => {
                console.log('roload Value : ', result.success, textValue);
                const user = GetCurrentUserFromFirebase();
                setWordComment([
                    ...wordComment,
                    {
                        username: user.displayName,
                        userId: user.uid,
                        date: Timestamp.fromDate(new Date()),
                        comment: textValue,
                        reactUsers: [],
                    },
                ]);
            });
            /* GetCommentsFromWord(id).then(result => {
                if (result.success) {
                    setWordComment(result.data);
                } else {
                    console.log(result.error);
                }
            }); */

            setText('');
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
            } else {
                console.log(result.error);
            }
        });
    }, [id]);

    let wordCommentLength = false;
    if (wordComment && Object.keys(wordComment).length !== 0) {
        wordCommentLength = true;
    } else {
        wordCommentLength = false;
    }

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

                <AddComment uploadButton={uploadComment} />
            </div>
            <BadgeComponent />
        </>
    );
}

export default WordCommunityView;
