import React, { useState, useRef, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

import TodayWordCard from './TodayWordCard.jsx';
import Header from '../../components/Header.jsx';
import TodayCheckComponent from './TodayCheckComponent.jsx';
import backCardImg from '../../assets/images/Thumbnail1.png';

import WordData from '../../dummyData/todayWordDump.js';

import '../../styles/todayWordPage/TodayWordView.scss';

function TodayWordView() {
    const [wordCardHeight, setWordCardHeight] = useState(200);
    const [isCheckText, setIsCheckText] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    });

    let wordCard = useRef(null);

    useEffect(() => {
        if (wordCard.current) {
            const wordCardHeight = wordCard.current.scrollHeight;
            setWordCardHeight(wordCardHeight);
        }
    }, []);

    const handleClick = cnt => {
        setIsCheckText(isCheckText => ({
            ...isCheckText,
            [cnt]: true,
        }));
    };

    return (
        <div className="todaywordview">
            <Header />
            {Object.keys(isCheckText).map((item, index) => (
                <ReactCardFlip
                    isFlipped={isCheckText[item]}
                    flipDirection="horizontal"
                    className="card-box"
                    key={index}
                >
                    <div
                        className="todayword-back-img"
                        style={{ height: wordCardHeight + 'px' }}
                    >
                        <img
                            src={backCardImg}
                            alt="backcard"
                            onClick={() => handleClick(item)}
                        />
                    </div>
                    <div ref={wordCard} className="wordcard-height">
                        <TodayWordCard wordData={WordData[index]} />
                    </div>
                </ReactCardFlip>
            ))}
            <TodayCheckComponent checkText={isCheckText} />
        </div>
    );
}

export default TodayWordView;
