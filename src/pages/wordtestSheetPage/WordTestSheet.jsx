import React, { useEffect, useState } from 'react';
import '../../styles/wordtestSheetPage/WordTestSheet.scss';
import Header from '../../components/Header';
import WordTestTitle from './WordTestTitle';
import WordTestQuiz from './WordTestQuiz';
import WordTestCheckOut from './WordTestCheckOut';
import WordTestScore from './WordTestScore';
import WordTestResult from './WordTestResult';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GetTestDataList } from '../../firebase/api/QuizApi';

const WordtestSheetPage = () => {
    const [searchParameter, _] = useSearchParams();
    const navigate = useNavigate();
    if (!searchParameter.has('id')) {
        navigate('/testList');
    }
    const quizId = searchParameter.get('id');

    const [selectedOptionStates, setSelectedOptionStates] = useState([]);
    const [quizData, setQuizData] = useState({
        title: '',
        subtitle: '',
        quizzes: [],
    });

    const handleOptionClick = (quizIndex, optionIndex) => {
        const newSelectedOptionStates = [...selectedOptionStates];
        const isSelected =
            newSelectedOptionStates[quizIndex].selectedOptionIndex ===
            optionIndex;

        newSelectedOptionStates[quizIndex].selectedOptionIndex = isSelected
            ? null
            : optionIndex;
        newSelectedOptionStates[quizIndex].isChecked = !isSelected;
        setSelectedOptionStates(newSelectedOptionStates);
    };

    useEffect(() => {
        GetTestDataList(quizId).then(result => {
            if (result.success) {
                setQuizData(result.data);
                setSelectedOptionStates(
                    result.data.quizzes.map((_1, _2) => {
                        return {
                            selectedOptionIndex: null,
                            isChecked: false,
                        };
                    }),
                );
            }
        });
    }, []);

    /**
     * 채점하는 함수입니다.
     * @param {Quiz[]} quizzes 문제가 들어간 값
     * @param {number[]} userChosen 사용자가 고른 값
     * @returns {[number,boolean[]]} 사용자가 문제를 맞춘 갯수 / 문제 정답 유/무 (배열)
     */
    const onGradingEvent = (quizzes, userChosen) => {
        let count = 0;
        let correct = Array(quizzes.length).fill(false);
        quizzes.forEach((quiz, index) => {
            correct[index] = quiz.choose[userChosen[index]] === quiz.answer;
            if (correct[index]) count += 1;
        });
        return [count, correct];
    };

    const [showScore, setShowScore] = useState(false);
    const [showResult, setShowResult] = useState(false); // 추가된 상태 값

    return (
        <div className="wordtestsheet-page">
            <Header isNavigationBar={false} />
            <div className="wordtestsheet-container">
                <WordTestTitle
                    mainTitle={quizData.title}
                    subTitle={quizData.subtitle}
                />
                <WordTestQuiz
                    quizzes={quizData.quizzes}
                    onHandleOptionClick={handleOptionClick}
                    selectedOption={selectedOptionStates}
                />
                <WordTestCheckOut
                    onClick={() => {
                        onGradingEvent(
                            quizData.quizzes,
                            selectedOptionStates.map(
                                state => state.selectedOptionIndex,
                            ),
                        );
                    }}
                />
                {showScore && <WordTestScore />}
                {showResult && <WordTestResult />}
            </div>
        </div>
    );
};

export default WordtestSheetPage;
