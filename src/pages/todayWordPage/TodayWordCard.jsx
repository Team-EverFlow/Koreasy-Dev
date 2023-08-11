import React from 'react';
import Sound from '../../assets/images/Sound.svg';
import ExampleSentence from '../../components/ExampleSentence';
import Bookmark from '../../components/Bookmark';

import Reply from '../../assets/images/Reply.svg';
import MySentences from '../../assets/images/MySentences.svg';

import '../../styles/todayWordPage/TodayWordCard.scss';

/**
 *
 * @param {{wordID: string, wordKr: string, wordEn: string, pronunciation: string, meaning: string,
 * ExampleSentence: {sentenceKr: string, sentenceEn: string}}} wordData wordData json data
 * @returns
 */
function TodayWordCard({ wordData }) {
    wordData = {
        wordId: 'word1',
        wordKr: '사과',
        wordEn: 'Apple',
        pronunciation: '[sagua]',
        meaning: 'noun-Apple',
        ExampleSentence: [
            {
                sentenceKr: '나는 사과사의 아이폰을 이용한다.',
                sentenceEn: "I'm using iPhone by apple company.",
            },
            {
                sentenceKr: '나는 사과사의 아이폰을 이용한다.',
                sentenceEn: "I'm using iPhone by apple company.",
            },
        ],
    };

    return (
        <div className="todaywordcard-background">
            <div className="wordInfo-frame">
                <div className="mean">
                    <div className="text-box">
                        <div className="krWord">{wordData.wordKr}</div>
                        <div className="sound-box">
                            <img src={Sound} alt="sound" />
                        </div>
                        <div className="pronunciation">
                            {wordData.pronunciation}
                        </div>
                    </div>
                    <div className="info">{wordData.wordEn}</div>
                </div>
                <div className="bookmark-box">
                    <Bookmark />
                </div>
            </div>
            <div className="example-frame">
                Example sentence
                <ExampleSentence
                    isSound={true}
                    ExampleSentence={wordData.ExampleSentence[0]}
                />
                <ExampleSentence
                    isSound={true}
                    ExampleSentence={wordData.ExampleSentence[1]}
                />
            </div>
            <div className="option-frame">
                <a
                    href="./todayword/reply"
                    className="option-buttion link-offset-2 link-underline link-underline-opacity-0"
                >
                    <div className="icon-box">
                        <img src={Reply} alt="Reply" />
                    </div>
                    Reply
                </a>
                <a
                    href="."
                    className="option-buttion link-offset-2 link-underline link-underline-opacity-0"
                >
                    <div className="icon-box">
                        <img src={MySentences} alt="My Sentences" />
                    </div>
                    My Sentences
                </a>
            </div>
        </div>
    );
}

export default TodayWordCard;
