import React, { useState } from 'react';
import UserInformation from './UserInformation.js';

const BookmarkIcon = ({ wordId }) => {
    const [isClicked, setIsClicked] = useState(
        UserInformation.bookmark.some(item => item.wordId === wordId),
    );

    const handleClick = () => {
        const updatedIsClicked = !isClicked;
        setIsClicked(updatedIsClicked);

        const updatedBookmark = updatedIsClicked
            ? [
                  ...UserInformation.bookmark,
                  { wordId, bookmarkDate: getCurrentDate() },
              ]
            : UserInformation.bookmark.filter(item => item.wordId !== wordId);

        console.log('Updated Bookmark:', updatedBookmark);

        UserInformation.bookmark = updatedBookmark;
    };

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };

    return (
        <svg
            width="18"
            height="24"
            style={{ width: '100%', height: '100%' }}
            viewBox="0 0 21 30"
            fill={isClicked ? '#44DA92' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
        >
            <path
                d="M20.0001 28V3C20.0001 1.89543 19.1047 1 18.0001 1H3C1.89543 1 1 1.89543 1 3V28L10.5001 17.6765L20.0001 28Z"
                stroke="#535356"
            />
        </svg>
    );
};

export default BookmarkIcon;
