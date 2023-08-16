import React, { useState, useEffect } from 'react';
import '../styles/components/WordCardText.scss';

/**
 *
 * @param {{word: {wordId: string, wordKr: string, wirdEn: string, pronunciation: string, meaning: string }}}
 * @returns
 */
function WordCardText({ word, index }) {
    const [wordCard, setWordCard] = useState(
        word === undefined
            ? {
                  wordId: 'word1',
                  wordKr: '사과',
                  wordEn: 'Apple',
                  pronunciation: '[sagua]',
                  meaning: 'noun-Apple',
                  exampleSentence: [
                      {
                          sentenceKr: '나는 사과사의 아이폰을 사용한다.',
                          sentenceEr: 'I am using iPhone by apple company',
                      },
                      {
                          sentenceKr: '나는 사과사의 아이폰을 사용한다.',
                          sentenceEr: 'I am using iPhone by apple company',
                      },
                  ],
              }
            : word[index],
    );

    useEffect(() => {
        word && setWordCard({ ...word[index] });
    }, [word, index]);

    return (
        <div className="card-background">
            <div className="kr-word">
                <div className="kr-text">{wordCard.wordKr}</div>
                <div className="pronunciation">{wordCard.pronunciation}</div>
            </div>
            <div className="en-word">{wordCard.meaning}</div>
        </div>
    );
}

export default WordCardText;
