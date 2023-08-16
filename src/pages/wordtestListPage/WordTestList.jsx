import React, { useEffect, useState } from 'react';
import WordTestCell from './WordTestCell';
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
                            title: quiz.title,
                            date: quiz.date.toDate(),
                        };
                    }),
                );
            }
        });
    }, []);

    return (
        <div>
            <Header isNavigationBar={false} viewName="Wordtest" />
            {quizList.map((item, index) => (
                <WordTestCell
                    key={index}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                />
            ))}
        </div>
    );
};

export default WordTestList;
