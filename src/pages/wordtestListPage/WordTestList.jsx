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
                            listTitle: quiz.title,
                            dateText: quiz.date,
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
                    listTitle={item.listTitle}
                    dateText={item.dateText}
                />
            ))}
        </div>
    );
};

export default WordTestList;
