import React, { useState } from 'react';
import checkBoxActive from '../../assets/checkBox.svg';
import checkBoxInactive from '../../assets/checkBox-1.svg';

const SheetButton = ({ isChecked, onClick }) => (
    <div
        style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
        }}
        onClick={onClick}
    >
        <img
            src={isChecked ? checkBoxActive : checkBoxInactive}
            alt={isChecked ? '활성화' : '비활성화'}
        />
    </div>
);

const WordtestQuiz = () => {
    const data = ['사과', '바나나', '체리', '복숭아'];

    const [buttonStates, setButtonStates] = useState(
        Array(data.length).fill(false),
    );

    const handleClick = index => {
        const newButtonStates = buttonStates.map((_, idx) => idx === index);
        setButtonStates(newButtonStates);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        margin: '16px 0',
                    }}
                >
                    <SheetButton
                        isChecked={buttonStates[index]}
                        onClick={() => handleClick(index)}
                    />
                    <span style={{ marginLeft: '8px', marginRight: '8px' }}>
                        {index + 1}.
                    </span>
                    <span>{item}</span>
                </div>
            ))}
        </div>
    );
};

const QuizList = () => {
    // const data = [
    //     '1 번째 데이터',
    //     '2 번째 데이터',
    //     '3 번째 데이터',
    //     '4 번째 데이터',
    //     '5 번째 데이터',
    //     '6 번째 데이터',
    //     '7 번째 데이터',
    //     '8 번째 데이터',
    //     '9 번째 데이터',
    //     '10 번째 데이터',
    // ];

    const QuizData = [
        // TestSession : 1,
        // TestTitle : "Aug, 2023",
        // Quiz : [
        {
            id: 1,
            Question:
                'In Korean, this word uses when say hello each other. What is that?',
            Seonji: '[사과, 바나나, 복숭아, 체리]',
        },
        {
            id: 2,
            Question: 'In Korean, this word uses when say hello e',
            Seonji: '[깅아지, 고양이, 독수리, 뱀]',
        },
        {
            id: 3,
            Question: 'In Korean, this word uses when shat?',
            Seonji: '[의자, 테이블, 찻잔, 식탁보]',
        },
        {
            id: 4,
            Question: 'In Korean, this word',
            Seonji: '[강, 바다, 산, 계곡]',
        },
        {
            id: 5,
            Question:
                'In Korean, this word uses when say hello each other. What is that?',
            Seonji: '[별, 하늘, 눈, 비]',
        },
        {
            id: 6,
            Question: 'In Korean, this word uses when say hello e',
            Seonji: '[음악, 미술, 체육, 수학]',
        },
        {
            id: 7,
            Question: 'In Korean, this word uses when shat?',
            Seonji: '[행복, 슬픔, 사랑, 미움]',
        },
        {
            id: 8,
            Question: 'In Korean, this word',
            Seonji: '[느리다, 빠르다, 덥다, 느리다]',
        },
        {
            id: 9,
            Question: 'In Korean, this word uses when shat?',
            Seonji: '[파랑, 빨강, 노랑, 초록]',
        },
        {
            id: 10,
            Question: 'In Korean, this word',
            Seonji: '[어둡다, 밝다, 웃다, 울다]',
        },
    ];

    const WordtestSheet = ({ QuizData }) => {
        return (
            <div>
                {QuizData.map((item, index) => (
                    <div key={index}>
                        <p>{item}</p>
                        <WordtestQuiz />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <WordtestSheet data={QuizData} />
        </div>
    );
};

export default QuizList;
