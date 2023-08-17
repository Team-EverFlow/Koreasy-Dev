import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// import Sound from '../../assets/images/Sound.svg';
import ExampleSentence from '../../components/ExampleSentence';
import Bookmark from '../../components/Bookmark';
import Reply from '../../assets/images/Reply.svg';
import MySentences from '../../assets/images/MySentences.svg';
import { ToastGenerator } from '../../components/ToastGenerator';

import '../../styles/todayWordPage/TodayWordCard.scss';

/**
 *
 * @param {wordId: string, wordKr: string, wordEn: string, pronunciation: string, meaning: string,
 * ExampleSentence: {sentenceKr: string, sentenceEn: string}}} wordData wordData json data
 * @returns
 */
function TodayWordCard({ wordData, index, onClick }) {
    let [isClickCard, setIsClickCard] = useState(false);
    let [RegisterFailedToast, onRegisterFailedToastCall] = ToastGenerator();
    const [wordCard, setWordCard] = useState(
        wordData === undefined
            ? {
                  id: 'word1',
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
            : wordData[index],
    );

    const onMySenteceClick = () => {
        onRegisterFailedToastCall();
    };

    useEffect(() => {
        if (wordData !== undefined) {
            setWordCard(wordData[index]);
        }
    }, [wordData, index]);

    const handleClick = () => {
        setIsClickCard(!isClickCard);
        if (onClick) {
            onClick(!isClickCard);
        }
    };

    return (
        <div className="todaywordcard-background" onClick={handleClick}>
            <div className="wordInfo-frame">
                <div className="mean">
                    <div className="text-box">
                        <div className="krWord">{wordCard.wordKr}</div>
                        {/* <div className="sound-box">
                            <img src={Sound} alt="sound" />
                        </div> */}
                        <div className="pronunciation">
                            {wordCard.pronunciation}
                        </div>
                    </div>
                    <div className="todaywordcard-info">{wordCard.wordEn}</div>
                </div>
                <div className="bookmark-box">
                    <Bookmark wordId={wordCard.id} />
                </div>
            </div>
            <div className="example-frame">
                Example sentence
                {Object.values(wordCard.exampleSentence).map((item, index) => (
                    <ExampleSentence
                        isSound={false}
                        ExampleSentence={wordCard.exampleSentence[index]}
                        key={index}
                    />
                ))}
            </div>
            <div className="option-frame">
                <Link
                    to={'./reply?id=' + wordCard.id}
                    className="option-buttion link-offset-2 link-underline link-underline-opacity-0"
                >
                    <div className="icon-box">
                        <img src={Reply} alt="Reply" />
                    </div>
                    Reply
                </Link>
                <Link
                    to="."
                    className="option-buttion link-offset-2 link-underline link-underline-opacity-0"
                    onClick={onMySenteceClick}
                >
                    <div className="icon-box">
                        <img src={MySentences} alt="My Sentences" />
                    </div>
                    My Sentences
                </Link>
            </div>
            <RegisterFailedToast
                message="아직 준비중인 기능입니다"
                icon={false}
            />
        </div>
    );
}

export default TodayWordCard;
