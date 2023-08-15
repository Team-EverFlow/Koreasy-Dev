import React, { useState } from 'react';
import '../../styles/wordtestSheetPage/WordTestQuiz.scss';
import QuizData from '../../dummyData/QuizData';
import CheckboxImage from '../../assets/images/Checkbox.svg';

const WordtestQuiz = () => {
    const [searchParameter, _] = useSearchParams();
    const navigate = useNavigate();
    if (!searchParameter.has('id')) {
        navigate('/testList');
    }
    const quizId = searchParameter.get('id');

    const [selectedSeonjiStates, setSelectedSeonjiStates] = useState(
        QuizData.map(quiz => ({
            selectedSeonjiIndex: null,
            isChecked: false,
        })),
    );

    const handleSeonjiClick = (quizIndex, seonjiIndex) => {
        const newSelectedSeonjiStates = [...selectedSeonjiStates];
        const isSelected =
            newSelectedSeonjiStates[quizIndex].selectedSeonjiIndex ===
            seonjiIndex;

        newSelectedSeonjiStates[quizIndex].selectedSeonjiIndex = isSelected
            ? null
            : seonjiIndex;
        newSelectedSeonjiStates[quizIndex].isChecked = !isSelected;
        setSelectedSeonjiStates(newSelectedSeonjiStates);
    };

    return (
        <div className="quiz-container">
            {QuizData.map((quiz, quizIndex) => (
                <div key={quiz.quizId} className="quiz-item">
                    <div className="quiz-state">
                        <div className="quiz-number">
                            <div className="number">{quizIndex + 1}</div>
                        </div>
                        <div className="question">{quiz.question}</div>
                        <div className="quiz-content">
                            {quiz.seonji.map((seonji, seonjiIndex) => {
                                const isSelected =
                                    selectedSeonjiStates[quizIndex]
                                        .selectedSeonjiIndex === seonjiIndex;

                                return (
                                    <div
                                        key={seonjiIndex}
                                        className={`seonji ${
                                            isSelected ? 'selected' : ''
                                        }`}
                                        onClick={() =>
                                            handleSeonjiClick(
                                                quizIndex,
                                                seonjiIndex,
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
                                            {seonji.trim()}
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
