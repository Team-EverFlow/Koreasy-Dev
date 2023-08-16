import React from 'react';
import '../../styles/wordtestSheetPage/WordTestCheckOut.scss';

const WordTestCheckOut = ({ onClick, disable }) => {
    return (
        <div
            className={`checkout-box ${disable ? 'disabled' : ''}`}
            onClick={!disable ? onClick : undefined}
        >
            <div className="checkout-text">Check Out</div>
        </div>
    );
};

export default WordTestCheckOut;
