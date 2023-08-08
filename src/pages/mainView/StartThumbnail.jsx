import React from 'react';

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
        link: '.',
    };
    let Thumbnail = Thumbnail2;
    if (startText !== 'bookmark') {
        text.head = 'Learn more Korean words';
        text.start = 'Go to word book';
        Thumbnail = Thumbnail1;
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
                <a
                    href={text.link}
                    className="link-offset-2 link-underline link-underline-opacity-0"
                >
                    <div className="start-button text-lite">
                        {text.start}
                        <Chevrion color="MainColor" />
                    </div>
                </a>
                <div className="share-button text-lite">
                    <a
                        href={text.link}
                        className="text-lite link-offset-2 link-underline link-underline-opacity-0"
                    >
                        Share this service
                    </a>
                </div>
            </div>
        </div>
    );
};

export default StartThumbnail;
