import React from 'react';
import '../../styles/wordtestSheetPage/WordTestQuiz.scss';
import CheckboxImage from '../../assets/images/Checkbox.svg';

const WordtestQuiz = ({ quizzes, onHandleOptionClick, selectedOption }) => {
    return (
        <div className="quiz-container">
            {quizzes.map((quiz, quizIndex) => (
                <div key={quiz.id} className="quiz-item">
                    <div className="quiz-state">
                        <div className="quiz-number">
                            <div className="number">{quizIndex + 1}</div>
                        </div>
                        <div className="question">{quiz.question}</div>
                        <div className="quiz-content">
                            {quiz.choose.map((option, optionIndex) => {
                                const isSelected =
                                    selectedOption[quizIndex]
                                        .selectedOptionIndex === optionIndex;

                                return (
                                    <div
                                        key={optionIndex}
                                        className={`seonji ${
                                            isSelected ? 'selected' : ''
                                        }`}
                                        onClick={() =>
                                            onHandleOptionClick(
                                                quizIndex,
                                                optionIndex,
                                            )
                                        }
                                    >
                                        <div
                                            className={`checkbox ${
                                                isSelected ? 'selected' : ''
                                            }`}
                                        >
                                            {isSelected && (
                                                <img
                                                    src={CheckboxImage}
                                                    alt="Checkbox"
                                                    className="checkbox-image"
                                                />
                                            )}
                                        </div>
                                        <div
                                            className={`text ${
                                                isSelected ? 'selected' : ''
                                            }`}
                                        >
                                            {option.trim()}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WordtestQuiz;
