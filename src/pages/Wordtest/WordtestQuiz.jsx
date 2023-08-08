import React, { useState } from 'react';
import WordTestSheetButton from './WordTestSheetButton';
import QuizData from '../dumpPage/DumpData';
import './WordTest.scss';

const WordTestQuiz = () => {
    const [buttonStates, setButtonStates] = useState(
        QuizData.map(() => Array(4).fill(false)),
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
        <div className="word-test-quiz-container">
            {QuizData.map((item, index) => (
                <div key={item.id} className="quiz-item">
                    <div>
                        <div className="id">{item.id}</div>
                    </div>
                    <span className="question">{item.Question}</span>
                    <div className="seonji-container">
                        {item.Seonji.slice(1, -1)
                            .split(',')
                            .map((seonji, seonjiIndex) => (
                                <div key={seonjiIndex} className="seonji-item">
                                    <WordTestSheetButton
                                        isChecked={
                                            buttonStates[index][seonjiIndex]
                                        }
                                        onClick={() =>
                                            handleClick(index, seonjiIndex)
                                        }
                                    />
                                    <span>
                                        {seonjiIndex + 1}. {seonji.trim()}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WordTestQuiz;
