import React, { useState, useRef } from 'react';
import '../../styles/wordCommunityPage/AddComment.scss';
import Upload from '../../components/Upload';

function AddComment() {
    let [textValue, setText] = useState('');

    function uploadButton() {
        //버튼 실행 조건(텍스트 카운트)
        if (textValue.length <= 250 || textValue.length > 0) {
            setText('');
            //서버로 전송 및 데이터 갱신
        }
    }
    const checkText = event => {
        setText(event.target.value);
        // console.log(event.target.value);
    };

    const textarea = useRef(null);
    const handleResizeHeight = () => {
        if (textarea.current) {
            textarea.current.style.height = 'auto';
            textarea.current.style.height =
                textarea.current.scrollHeight + 'px';
        }
    };

    return (
        <div className="comment-background">
            <div className="comment-frame">
                <div className="comment-title-text">Add Comment</div>
                <div className="text-counter">
                    {textValue.length.toString() + '/250'}
                </div>
            </div>
            <div className="input-frame">
                <textarea
                    className="input-box"
                    id="exampleFormControlInput1"
                    placeholder="write your opinion or new example"
                    value={textValue}
                    onInput={checkText}
                    onChange={handleResizeHeight}
                    rows={1}
                    ref={textarea}
                />
                <button className="upload-box" onClick={uploadButton}>
                    {textValue.length > 0 && textValue.length <= 250 ? (
                        <Upload color={true} />
                    ) : (
                        <Upload />
                    )}
                </button>
            </div>
        </div>
    );
}

export default AddComment;
