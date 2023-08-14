import React from 'react';
import Sound from '../../assets/images/Sound.svg';
import ExampleSentence from '../../components/ExampleSentence';
import '../../styles/TodayWordCard.scss';
import Bookmark from '../../components/Bookmark';

function TodayWordCard() {
    let wordCard = {
        krWord: '사과',
        pronunciation: '[sagua]',
        enWord: 'noun - Apple',
    };
    let exampleCard = {
        exampleText: '나는 사과사의 아이폰을 이용한다.',
        mean: "I'm using iPhone by apple company.",
    };
    return (
        <div className="todaywordcard-background">
            <div className="useally">
                <div className="mean">
                    <div className="text-box">
                        <div className="krWord">{wordCard.krWord}</div>
                        <div className="sound-box">
                            <img src={Sound} alt="sound" />
                        </div>
                        <div className="pronunciation">
                            {wordCard.pronunciation}
                        </div>
                    </div>
                    <div className="info">{wordCard.enWord}</div>
                </div>
                <div className="bookmark-box">
                    <Bookmark />
                </div>
            </div>
            <div className="example-frame">
                Example sentence
                <ExampleSentence
                    isSound={true}
                    exampleText={exampleCard.exampleText}
                    mean={exampleCard.mean}
                />
                <ExampleSentence
                    isSound={true}
                    exampleText={exampleCard.exampleText}
                    mean={exampleCard.mean}
                />
            </div>
        </div>
    );
}

export default TodayWordCard;
