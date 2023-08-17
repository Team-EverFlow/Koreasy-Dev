import React, { useState } from 'react';
import Heart from '../../components/Heart';
import Divider from '../../components/Divider';

import '../../styles/wordCommunityPage/Comment.scss';

function Comment({ wordComment }) {
    let [comment, setComment] = useState(
        wordComment
            ? { ...wordComment }
            : {
                  userName: 'testUserName',
                  date: '2023.08.14',
                  commentID: 'abcd',
                  commentInfo: '토마토 먹고싶다',
                  heartCnt: 2,
              },
    );
    let [isHeartClick, setIsHeartClick] = useState(false); // 서버에서 값 받아와 확인

    console.log(wordComment);
    const clickHeart = item => {
        if (!isHeartClick) {
            setComment(comment => ({
                ...comment,
                [item]: comment.heartCnt + 1,
            }));
            setIsHeartClick(true);
        } else {
            setComment(comment => ({
                ...comment,
                [item]: comment.heartCnt - 1,
            }));
            setIsHeartClick(false);
        }
        // 서버로 하트 값 전송
    };

    const deleteComment = () => {
        // 서버로 코멘트 id값 전송
    };

    return (
        <div className="comment-background">
            <div className="name-frame">
                <button className="user-name">{comment.userName}</button>
                <div className="comment-date">{comment.date}</div>
            </div>
            <div className="comment-comment">{comment.comment}</div>
            <div className="comment-util">
                <div className="heart-frame">
                    <button
                        className="heart"
                        onClick={() => clickHeart('heartCnt')}
                    >
                        <Heart />
                    </button>
                    {comment.heartCnt}
                </div>
                <button className="comment-delete" onClick={deleteComment}>
                    Delete
                </button>
            </div>

            <Divider />
        </div>
    );
}

export default Comment;
