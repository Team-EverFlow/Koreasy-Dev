import React, { useEffect, useState } from 'react';
import WordTestSheetButton from './WordTestSheetButton';
import '../../styles/WordTestQuiz.scss';
import Headers from '../../components/Header.jsx';
import { GetTestDataList } from '../../firebase/api/QuizApi';
import { useSearchParams } from 'react-router-dom';

const WordTestQuiz = () => {
    const [searchParameter, _] = useSearchParams();

    const quizId = searchParameter.get('id');
    const [quizData, setQuizData] = useState({
        title: '',
        subtitle: '',
        quizzes: [],
    });
    const [buttonStates, setButtonStates] = useState([]);
    useEffect(() => {
        GetTestDataList(quizId).then(result => {
            if (result.success) {
                setQuizData(result.data);
                setButtonStates(
                    result.data.quizzes.map(quiz =>
                        Array(quiz.choose.length).fill(false),
                    ),
                );
            }
        });
    }, []);

    const handleClick = (index, seonjiIndex) => {
        const newButtonStates = buttonStates.map((states, idx) => {
            if (idx === index) {
                return states.map((state, i) => i === seonjiIndex);
            }
            return states;
        });
        setButtonStates(newButtonStates);
    };

    return (
        <div className="main-cantainer">
            <Headers />
            <div className="title-container">
                <p className="title">{quizData.title}</p>
                <p className="subtititle">{quizData.subtitle}</p>
            </div>

            <div className="word-test-quiz-container">
                {quizData.quizzes.map((item, index) => (
                    <div key={item.id} className="quiz-item">
                        <div>
                            <div className="id">{item.id}</div>
                        </div>
                        <span className="question">{item.question}</span>
                        <div className="seonji-container">
                            {item.choose
                                .slice(1, -1)
                                .map((option, chooseIndex) => (
                                    <div
                                        key={chooseIndex}
                                        className="seonji-item"
                                    >
                                        <WordTestSheetButton
                                            isChecked={
                                                buttonStates[index][chooseIndex]
                                            }
                                            onClick={() =>
                                                handleClick(index, chooseIndex)
                                            }
                                        />
                                        <div className="seonji-mid">
                                            <span className="seonji-text">
                                                {chooseIndex + 1}.{' '}
                                                {option.trim()}
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
