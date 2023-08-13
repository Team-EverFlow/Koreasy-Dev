import React, { useState } from 'react';
import UserInformation from '../../dummyData/UserInformation.js';

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
            width="14"
            height="20"
            style={{ width: '100%', height: '100%' }}
            viewBox="0 0 14 20"
            fill={isClicked ? '#44DA92' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
        >
            <path d="M1.73047 19.95C1.42122 19.95 1.18001 19.851 1.00684 19.6531C0.833659 19.4552 0.74707 19.1768 0.74707 18.8181V2.71265C0.74707 1.82821 0.966634 1.16333 1.40576 0.718018C1.84489 0.272705 2.50049 0.0500488 3.37256 0.0500488H10.6274C11.4995 0.0500488 12.1551 0.272705 12.5942 0.718018C13.0334 1.16333 13.2529 1.82821 13.2529 2.71265V18.8181C13.2529 19.1768 13.1663 19.4552 12.9932 19.6531C12.82 19.851 12.5788 19.95 12.2695 19.95C12.0407 19.95 11.8273 19.8726 11.6294 19.718C11.4377 19.5634 11.1315 19.2851 10.7109 18.8831L7.0835 15.3113C7.02783 15.2494 6.97217 15.2494 6.9165 15.3113L3.28906 18.8831C2.86849 19.2913 2.55924 19.5696 2.36133 19.718C2.16341 19.8726 1.95312 19.95 1.73047 19.95Z" />
        </svg>
    );
};

export default BookmarkIcon;
