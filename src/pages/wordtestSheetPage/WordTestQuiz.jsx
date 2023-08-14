import React from 'react';
import '../../styles/wordtestSheetPage/WordTestQuiz.scss';
import QuizData from '../../dummyData/QuizData';

const WordtestQuiz = () => {
    return (
        <div className="quiz-container">
            {QuizData.map((quiz, index) => (
                <div key={quiz.quizId} className="quiz-item">
                    <div className="quiz-state">
                        <div className="quiz-number">
                            <div className={`number number-${index + 1}`}>
                                {index + 1}
                            </div>
                        </div>
                        <div className="question">{quiz.question}</div>
                        <div className="quiz-content">
                            {quiz.seonji.map((seonji, seonjiIndex) => (
                                <div
                                    key={seonjiIndex}
                                    className={`seonji-item seonji-${
                                        seonjiIndex + 1
                                    }`}
                                >
                                    <div
                                        className={`checkbox-${
                                            seonjiIndex + 1
                                        }`}
                                    />
                                    <div className={`text-${seonjiIndex + 1}`}>
                                        {seonji.trim()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WordtestQuiz;
