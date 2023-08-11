import React from 'react';
import Heart from '../../components/Heart';

import '../../styles/wordCommunityPage/Comment.scss';
import Divider from '../../components/Divider';

function Comment() {
    let comment = {
        userName: 'TestUserName',
        date: '2023.09.01',
        comment: '와! 내가 정말 좋아하는 한국어 단어야!\n두번째\n세번째',
        heartCnt: 3,
    };

    return (
        <div className="comment-background">
            <div className="name-frame">
                <div className="user-name">{comment.userName}</div>
                <div className="comment-date">{comment.date}</div>
            </div>
            <div className="comment-comment">{comment.comment}</div>
            <div className="comment-util">
                <div className="heart-frame">
                    <div className="heart">
                        <Heart />
                    </div>
                    {comment.heartCnt}
                </div>
                <span className="comment-delete">Delete</span>
            </div>

            <Divider />
        </div>
    );
}

export default Comment;
