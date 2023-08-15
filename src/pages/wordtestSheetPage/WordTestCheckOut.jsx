import React from 'react';
import '../../styles/wordtestSheetPage/WordTestCheckOut.scss';

const WordTestCheckOut = ({ onClick }) => {
    return (
        <div className="checkout-box" onClick={onClick}>
            <div className="checkout-text">Check Out</div>
        </div>
    );
};

export default WordTestCheckOut;
