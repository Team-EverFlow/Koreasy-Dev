import React, { useState } from 'react';
import WordTestSheetButton from './WordTestSheetButton';
import QuizData from '../dumpPage/WordTestSheetDump';
import '../../styles/WordTestQuiz.scss';
import Headers from '../../components/Header.jsx';

const WordTestQuiz = () => {
    const [buttonStates, setButtonStates] = useState(
        QuizData.Quiz.map(() => Array(4).fill(false)),
    );

    const handleClick = (index, seonjiIndex) => {
        const newButtonStates = buttonStates.map((states, idx) => {
            if (idx === index) {
                const newStates = states.map((state, i) => i === seonjiIndex);
                return newStates;
            }
            return states;
        });
        setButtonStates(newButtonStates);
    };

    return (
        <div className="main-cantainer">
            <Headers />
            <div className="title-container">
                <p className="title">{QuizData.Title}</p>
                <p className="subtititle">{QuizData.Subtitle}</p>
            </div>

            <div className="word-test-quiz-container">
                {QuizData.Quiz.map((item, index) => (
                    <div key={item.id} className="quiz-item">
                        <div>
                            <div className="id">{item.id}</div>
                        </div>
                        <span className="question">{item.Question}</span>
                        <div className="seonji-container">
                            {item.Seonji.slice(1, -1)
                                .split(',')
                                .map((seonji, seonjiIndex) => (
                                    <div
                                        key={seonjiIndex}
                                        className="seonji-item"
                                    >
                                        <WordTestSheetButton
                                            isChecked={
                                                buttonStates[index][seonjiIndex]
                                            }
                                            onClick={() =>
                                                handleClick(index, seonjiIndex)
                                            }
                                        />
                                        <div className="seonji-mid">
                                            <span className="seonji-text">
                                                {seonjiIndex + 1}.{' '}
                                                {seonji.trim()}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WordTestQuiz;
