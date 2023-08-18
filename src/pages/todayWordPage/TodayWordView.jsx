import React, { useEffect, useRef, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import TodayWordCard from './TodayWordCard.jsx';
import Header from '../../components/Header.jsx';
import TodayCheckComponent from './TodayCheckComponent.jsx';

import WordData from '../../dummyData/todayWordDump.js';
import { GetTodayWordList } from '../../firebase/api/wordAPI.js';
import BadgeNotificationGenerator from '../../components/BadgeNotificationGenerator.jsx';
import { ATTENDANCE_ACHIEVEMENT_EVENT_NAME } from '../../types/const.js';

import '../../styles/todayWordPage/TodayWordView.scss';
import { AddAttendance } from '../../firebase/api/userAPI';

function TodayWordView() {
    const [wordCardHeight, setWordCardHeight] = useState(200);
    const [isCheckText, setIsCheckText] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
    });
    const [wordCardData, setWordCardData] = useState([...WordData]);
    let wordCard = useRef(null);
    const BadgeComponent = BadgeNotificationGenerator(
        ATTENDANCE_ACHIEVEMENT_EVENT_NAME,
    );

    useEffect(() => {
        GetTodayWordList().then(result => {
            if (result.success) {
                setWordCardData(result.data);
            } else {
                console.log(result.error);
            }
        });

        if (wordCard.current) {
            const wordCardHeight = wordCard.current.scrollHeight;
            setWordCardHeight(wordCardHeight);
        }
    }, []);
    useEffect(() => {
        if (
            Object.values(isCheckText)
                .map(v => v === true)
                .every(Boolean)
        ) {
            AddAttendance(new Date()).then(_ => {});
        }
    }, [isCheckText]);

    const handleClick = cnt => {
        setIsCheckText(isCheckText => ({
            ...isCheckText,
            [cnt]: true,
        }));
    };

    return (
        <div className="todaywordview">
            <Header />
            {wordCard &&
                Object.keys(isCheckText).map((item, index) => (
                    <ReactCardFlip
                        isFlipped={isCheckText[item]}
                        flipDirection="horizontal"
                        className="card-box"
                        key={index}
                    >
                        <div
                            className="todayword-back-img"
                            style={{ height: wordCardHeight + 'px' }}
                            onClick={() => handleClick(item)}
                        >
                            Tab and Check Today Word
                            {/* <img
                            src={backCardImg}
                            alt="backcard"
                            onClick={() => handleClick(item)}
                        /> */}
                        </div>
                        <div ref={wordCard} className="wordcard-height">
                            <TodayWordCard
                                wordData={wordCardData}
                                index={index}
                            />
                        </div>
                    </ReactCardFlip>
                ))}
            <div className="today-check-frame">
                <TodayCheckComponent checkText={isCheckText} />
            </div>
            <BadgeComponent />
        </div>
    );
}

export default TodayWordView;
