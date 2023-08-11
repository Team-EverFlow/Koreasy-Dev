import BookmarkDate from './BookmarkDate.jsx';

const BookmarkUpdate = (isClicked, wordId, bookmarkList) => {
    const updatedBookmark = isClicked
        ? [...bookmarkList, { wordId, bookmarkDate: BookmarkDate() }]
        : bookmarkList.filter(item => item.wordId !== wordId);

    return updatedBookmark;
};

export default BookmarkUpdate;
