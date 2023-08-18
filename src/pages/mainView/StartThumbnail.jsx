import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/StartThumbnail.scss';
import Chevrion from '../../components/Chevrion';
import Thumbnail1 from '../../assets/images/Thumbnail1.png';
import Thumbnail2 from '../../assets/images/Thumbnail2.png';

/**
 *
 * @param {string} startText bookmark or test
 * @returns
 */
const StartThumbnail = ({ startText }) => {
    let text = {
        head: "Let's check my Korean level.",
        start: 'Go to test',
        link: './testList',
    };
    let Thumbnail = Thumbnail2;
    if (startText !== 'bookmark') {
        text.head = 'Learn more Korean words';
        text.start = 'Go to word book';
        text.link = './wordbook';
        Thumbnail = Thumbnail1;
    }
    function shareClick() {
        if (navigator.share) {
            navigator.share({
                title: 'koreasy',
                text: 'esay way to run korean',
                url: 'https://team-everflow.github.io/koreasy',
            });
        } else {
            alert('공유하기가 지원되지 않는 환경 입니다.');
        }
    }

    return (
        <div className="thumbnail-background">
            <div className="img">
                <img
                    src={Thumbnail}
                    alt="thumbnail-img"
                    className="thumbnail-img"
                />
            </div>
            <div className="text-area">
                {text.head}
                <Link
                    to={text.link}
                    className="link-offset-2 link-underline link-underline-opacity-0"
                >
                    <div className="start-button text-lite">
                        {text.start}
                        <Chevrion color="MainColor" />
                    </div>
                </Link>
                <div className="share-button text-lite">
                    <Link
                        onClick={shareClick}
                        to="./"
                        className="text-lite link-offset-2 link-underline link-underline-opacity-0"
                    >
                        Share this service
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StartThumbnail;
