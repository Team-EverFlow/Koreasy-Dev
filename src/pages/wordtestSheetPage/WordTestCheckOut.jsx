import React from 'react';
import '../../styles/wordtestSheetPage/WordTestCheckOut.scss';

const WordTestCheckOut = ({ onClick, disable }) => {
    return (
        <div
            className={`checkout-box ${disable ? 'disabled' : ''}`}
            onClick={onClick}
        >
            <div className="checkout-text">Check Out</div>
        </div>
    );
};

export default WordTestCheckOut;
