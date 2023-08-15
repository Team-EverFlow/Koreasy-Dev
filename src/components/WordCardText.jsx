import React from 'react';
import './WordCardText.scss';

/**
 *
 * @param {{word: {wordId: string, wordKr: string, wirdEn: string, pronunciation: string, meaning: string }}}
 * @returns
 */
function WordCardText({ word }) {
    let wordCard =
        word !== undefined
            ? {
                  krWord: word.krWord ? word.krWord : 'krWord',
                  pronunciation: word.pronunciation
                      ? word.pronunciation
                      : '[pronunciation]',
                  enWord: word.enWord
                      ? word.enWord
                      : 'parts of speech - enWord',
              }
            : {
                  krWord: '사과',
                  pronunciation: '[sagua]',
                  enWord: 'noun - Apple',
              };

    return (
        <div className="card-background">
            <div className="kr-word">
                <div className="kr-text">{wordCard.krWord}</div>
                <div className="pronunciation">{wordCard.pronunciation}</div>
            </div>
            <div className="en-word">{wordCard.enWord}</div>
        </div>
    );
}

export default WordCardText;
