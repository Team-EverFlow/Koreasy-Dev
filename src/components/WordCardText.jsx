import React, { useState, useEffect } from 'react';
import '../styles/components/WordCardText.scss';

/**
 *
 * @param {{word: {wordId: string, wordKr: string, wirdEn: string, pronunciation: string, meaning: string }}}
 * @returns
 */
function WordCardText({ word, index }) {
    const [wordCard, setWordCard] = useState(word && word[index]);

    useEffect(() => {
        setWordCard({ ...word });
    }, [word, index]);
    // console.log(wordCard, word);
    return (
        <div className="card-background">
            <div className="kr-word">
                <div className="kr-text">{wordCard && wordCard.wordKr}</div>
                <div className="pronunciation">
                    {wordCard && wordCard.pronunciation}
                </div>
            </div>
            <div className="en-word">{wordCard && wordCard.meaning}</div>
        </div>
    );
}

export default WordCardText;
