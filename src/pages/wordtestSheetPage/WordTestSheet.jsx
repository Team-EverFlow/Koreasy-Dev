import React, { useEffect, useState } from 'react';
import '../../styles/wordtestSheetPage/WordTestSheet.scss';
import Header from '../../components/Header';
import WordTestTitle from './WordTestTitle';
import WordTestQuiz from './WordTestQuiz';
import WordTestCheckOut from './WordTestCheckOut';
import WordTestScore from './WordTestScore';
import WordTestResult from './WordTestResult';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GetTestDataList, SetTestScore } from '../../firebase/api/QuizApi';
import { DOES_NOT_EXIST_DOC } from '../../firebase/type/const';
import { ToastGenerator } from '../../components/ToastGenerator';

const WordtestSheetPage = () => {
    const [searchParameter, _] = useSearchParams();
    const navigate = useNavigate();
    if (!searchParameter.has('id')) {
        navigate('/testList');
    }
    const quizId = searchParameter.get('id');

    /**
     * @type {QuizChooseStatus}
     */
    const [selectedOptionStates, setSelectedOptionStates] = useState([]);

    /**
     * @type {TestData}
     */
    const [quizData, setQuizData] = useState({
        title: '',
        subtitle: '',
        quizzes: [],
    });
    const [enableCheckbox, setEnableCheckbox] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(true);
    const [showResult, setShowResult] = useState(false);
    const [correction, setCorrection] = useState(0);

    const [NotFoundToast, showNotFoundToast] = ToastGenerator();
    const [ExceptionToast, showExceptionToast] = ToastGenerator();
    const [SavedExceptionToast, showSavedExceptionToast] = ToastGenerator();

    useEffect(() => {
        GetTestDataList(quizId).then(result => {
            if (result.success) {
                setSelectedOptionStates(
                    result.data.quizzes.map((quiz, _2) => {
                        return {
                            result: undefined,
                            selectedOptionIndex: null,
                            correctOptionIndex: null,
                            incorrectOptionIndex: null,
                            isChecked: false,
                        };
                    }),
                );
                setQuizData(result.data);
            } else {
                if (result.error === DOES_NOT_EXIST_DOC) {
                    showNotFoundToast();
                } else {
                    showExceptionToast();
                }
                setTimeout(() => navigate('/testList'), 3000);
            }
        });
    }, []);

    /**
     * Checkbox 를 활성화해도 되는지 확인하는 함수
     * @param {Array<QuizChooseStatus>} selectedOption
     * @returns {boolean}
     */
    const isCheckboxEnable = selectedOption => {
        let count = 0;
        selectedOption.map((checked, _) => {
            if (checked) count += 1;
        });
        return count === selectedOption.length;
    };

    /**
     *
     * @param {number} quizIndex
     * @param {number} optionIndex
     */
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
        return [count, correct];
    };
    const onCheckoutClickEvent = () => {
        setShowCheckbox(false);
        setShowResult(true);

        const [correction, result] = onGradingEvent(
            quizData.quizzes,
            selectedOptionStates.map(state => state.selectedOptionIndex),
        );
        setCorrection(correction);

        const newSelectedOptionStates = [...selectedOptionStates];
        result.map((quizResult, index) => {
            newSelectedOptionStates[index].result = quizResult;
            if (quizResult) {
                newSelectedOptionStates[index].correctOptionIndex =
                    selectedOptionStates[index].selectedOptionIndex;
            } else {
                newSelectedOptionStates[index].incorrectOptionIndex =
                    selectedOptionStates[index].selectedOptionIndex;
                newSelectedOptionStates[index].correctOptionIndex =
                    quizData.quizzes[index].choose.indexOf(
                        quizData.quizzes[index].answer,
                    );
            }
        });
        setSelectedOptionStates(newSelectedOptionStates);

        SetTestScore(quizId, correction, quizData.quizzes.length).then(
            result => {
                if (!result.success) {
                    showSavedExceptionToast();
                }
            },
        );
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
                        onClick={onCheckoutClickEvent}
                        disable={!enableCheckbox}
                    />
                )}
                {showResult && (
                    <WordTestScore
                        quizzes={quizData.quizzes.length}
                        correction={correction}
                    />
                )}
                {showResult && <WordTestResult />}
            </div>
            <NotFoundToast
                icon={true}
                message="잘못된 퀴즈 아이디가 입력되었어요.\n올바른 퀴즈를 선택해주세요."
            />
            <ExceptionToast
                icon={true}
                message="퀴즈를 불러오는 과정에서 오류가 발생하였어요.\n잠시 후에 다시 시도해주세요."
            />
            <SavedExceptionToast
                icon={true}
                message="퀴즈 정보를 저장하는 과정에서 오류가 발생하였어요.\n잠시 후에 다시 시도해주세요."
            />
        </div>
    );
};

export default WordtestSheetPage;
