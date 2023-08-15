import React from 'react';
import '../../styles/wordtestSheetPage/WordTestQuiz.scss';
import { ReactComponent as CorrectImage } from '../../assets/images/correct.svg';
import { ReactComponent as IncorrectImage } from '../../assets/images/incorrect.svg';

const WordtestQuiz = ({
    quizzes,
    onHandleOptionClick,
    selectedOption,
    result,
}) => {
    /**
     * @param {number} optionIndex
     * @param {QuizChooseStatus} status
     */
    const optionStyle = (optionIndex, status) => {
        if (status.correctOptionIndex === optionIndex && result)
            return ['correct', CorrectImage];
        else if (status.incorrectOptionIndex === optionIndex && result)
            return ['incorrect', IncorrectImage];
        else if (status.selectedOptionIndex === optionIndex)
            return ['selected', CorrectImage];
        return ['', undefined];
    };

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
                                const [optionStyleResult, ImageComponent] =
                                    optionStyle(
                                        optionIndex,
                                        selectedOption[quizIndex],
                                    );
                                return (
                                    <div
                                        key={optionIndex}
                                        className={`seonji ${optionStyleResult}`}
                                        onClick={() =>
                                            onHandleOptionClick(
                                                quizIndex,
                                                optionIndex,
                                            )
                                        }
                                    >
                                        <div className="checkbox">
                                            {ImageComponent !== undefined && (
                                                <ImageComponent />
                                            )}
                                        </div>
                                        <span className="text">
                                            {option.trim()}
                                        </span>
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
