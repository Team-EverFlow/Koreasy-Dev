import React, { useState, useEffect } from 'react';
import '../styles/components/mainWordCardText.scss';

/**
 *
 * @param {{word: {wordId: string, wordKr: string, wirdEn: string, pronunciation: string, meaning: string }}}
 * @returns
 */
function WordCardText({ word, index }) {
    const [wordCard, setWordCard] = useState(word && word[index]);
    // console.log('console lpg : ', wordCard);
    useEffect(() => {
        setWordCard({ ...word[index] });
    }, [word, index]);
    // console.log(wordCard, word);
    return (
        <div className="card-background">
            <div className="kr-word">
                <div className="kr-text">
                    {console.log('?', wordCard && wordCard.wordKr)}
                    {wordCard && wordCard.wordKr}
                </div>
                <div className="pronunciation">
                    {wordCard && wordCard.pronunciation}
                </div>
            </div>
            <div className="en-word">{wordCard && wordCard.meaning}</div>
        </div>
    );
}

export default WordCardText;
