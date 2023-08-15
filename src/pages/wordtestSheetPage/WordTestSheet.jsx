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
    const [enableCheckbox, setEnableCheckbox] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(true);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        GetTestDataList(quizId).then(result => {
            if (result.success) {
                setSelectedOptionStates(
                    result.data.quizzes.map((quiz, _2) => {
                        return {
                            selectedOptionIndex: null,
                            correctOptionIndex: null,
                            incorrectOptionIndex: null,
                            isChecked: false,
                        };
                    }),
                );
                setQuizData(result.data);
            }
        });
    }, []);

    const isCheckboxEnable = selectedOption => {
        let count = 0;
        selectedOption.map((checked, _) => {
            if (checked) count += 1;
        });
        return count === selectedOption.length;
    };

    const handleOptionClick = (quizIndex, optionIndex) => {
        if (showResult) return;

        const newSelectedOptionStates = [...selectedOptionStates];
        const isSelected =
            newSelectedOptionStates[quizIndex].selectedOptionIndex ===
            optionIndex;

        newSelectedOptionStates[quizIndex].selectedOptionIndex = isSelected
            ? null
            : optionIndex;
        newSelectedOptionStates[quizIndex].isChecked = !isSelected;

        setEnableCheckbox(
            isCheckboxEnable(
                newSelectedOptionStates.map(selectedOption => {
                    return selectedOption.isChecked;
                }),
            ),
        );
        setSelectedOptionStates(newSelectedOptionStates);
    };

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

        setShowResult(true);
        return [count, correct];
    };

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
                    result={showResult}
                />
                {showCheckbox && (
                    <WordTestCheckOut
                        onClick={() => {
                            onGradingEvent(
                                quizData.quizzes,
                                selectedOptionStates.map(
                                    state => state.selectedOptionIndex,
                                ),
                            );
                        }}
                        disable={!enableCheckbox}
                    />
                )}
                {showResult && <WordTestScore />}
                {showResult && <WordTestResult />}
            </div>
        </div>
    );
};

export default WordtestSheetPage;
