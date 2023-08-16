import React, { useState, useEffect } from 'react';

import Chevrion from '../../components/Chevrion.jsx';
import WordCardText from '../../components/WordCardText.jsx';

import { GetTodayWordList } from '../../firebase/api/wordAPI.js';

function AutoScrollWord() {
    const [wordCardText, setWordCardText] = useState();
    const autoScrollTag = [
        'carousel-item active',
        'carousel-item',
        'carousel-item',
        'carousel-item',
    ];

    useEffect(() => {
        GetTodayWordList().then(result => {
            setWordCardText(result.data);
        });
    }, []);

    return (
        <div className="auto-words">
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-inner">
                    {wordCardText &&
                        Object.values(wordCardText).map((_, index) => (
                            <div className={autoScrollTag[index]} key={index}>
                                <div className="card-margin">
                                    <WordCardText
                                        word={wordCardText}
                                        index={index}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <Chevrion direction="Left" />
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <Chevrion />
                </button>
            </div>
        </div>
    );
}

export default AutoScrollWord;
