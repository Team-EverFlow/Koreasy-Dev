import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Heart from '../../components/Heart';
import Divider from '../../components/Divider';

import {
    AddReactComment,
    DeleteReactComment,
    DeleteComment,
} from '../../firebase/api/wordAPI';
import '../../styles/wordCommunityPage/Comment.scss';
import { GetCurrentUserFromFirebase } from '../../firebase/api/userAPI';

function Comment({ id, wordComment, user }) {
    let [comment, setComment] = useState(
        wordComment
            ? {
                  ...wordComment,
                  commentId: wordComment.id,
              }
            : {
                  username: 'testUserName',
                  date: '2023.08.14',
                  commentId: 'abcd',
                  comment: '토마토 먹고싶다',
                  reactUsers: ['ktq1Ui9kzfeX5EXCq7cU1nFeAG12', 'b'],
              },
    );

    let [isHeartClick, setIsHeartClick] = useState(false);
    useEffect(() => {
        setIsHeartClick(
            comment.reactUsers.includes(GetCurrentUserFromFirebase().uid),
        );
    }, []);

    const clickHeart = () => {
        console.log(isHeartClick);
        if (!isHeartClick) {
            AddReactComment(id, comment.commentId);
            setComment(comment => ({
                ...comment,
                reactUsers: comment.reactUsers.concat(
                    GetCurrentUserFromFirebase().uid,
                ),
            }));
        } else {
            DeleteReactComment(id, comment.commentId).then(result => {
                setComment(comment => ({
                    ...comment,
                    reactUsers: comment.reactUsers.filter(
                        user => user !== GetCurrentUserFromFirebase().uid,
                    ),
                }));
            });
        }
        setIsHeartClick(v => !v);
    };

    const deleteComment = () => {
        console.log('test1');
        if (comment.userId !== user.id) return;
        console.log('test2');
        DeleteComment(id, comment.commentId).then(result => {
            if (result.success) {
                console.log('comment delete!');
            } else {
                console.log(result.error);
            }
        });
    };

    return (
        <div className="comment-background">
            <div className="name-frame">
                <button className="user-name">{comment.username}</button>
                <div className="comment-date">
                    {moment(new Date(comment.date.seconds * 1000)).format(
                        'YYYY.MM.DD HH:MM',
                    )}
                </div>
            </div>
            <div className="comment-comment">{comment.comment}</div>
            <div className="comment-util">
                <div className="heart-frame">
                    <button className="heart" onClick={clickHeart}>
                        <Heart isClicked={isHeartClick} />
                    </button>
                    {comment.reactUsers.length}
                </div>
                {user && user.id === comment.userId && (
                    <button className="comment-delete" onClick={deleteComment}>
                        Delete
                    </button>
                )}
            </div>

            <Divider />
        </div>
    );
}

export default Comment;
