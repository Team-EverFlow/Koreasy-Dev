import React, { useEffect, useState } from 'react';
import WordTestTitle from './WordTestTitle';
import '../../styles/WordTestList.scss';
import Header from '../../components/Header';
import { GetWordTestList } from '../../firebase/api/QuizApi';

const WordTestList = () => {
    const [quizList, setQuizList] = useState([]);
    useEffect(() => {
        GetWordTestList().then(result => {
            if (result.success) {
                setQuizList(
                    result.data.map(quiz => {
                        return {
                            id: quiz.testDataId,
                            test: quiz.title,
                            date: quiz.date,
                        };
                    }),
                );
            }
        });
    }, []);

    return (
        <div>
            <Header viewName="Wordtest" />
            <div className="r-title">
                <div className="word-test-list-view-name">ViewName</div>
                {quizList.map((item, index) => (
                    <WordTestTitle
                        key={index}
                        test={item.test}
                        date={item.date}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default WordTestList;
