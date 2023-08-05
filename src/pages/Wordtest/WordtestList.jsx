import React from 'react';
import WordtestTitle from './WordtestTitle';
import './WordtestList.scss';

function WordtestList() {
    const myList = [
        'Wordtest 1',
        'Wordtest 2',
        'Wordtest 3',
        'Wordtest 4',
        'Wordtest 5',
    ];

    const List = [
        'week 1 , Aug. 2023',
        'week 2 , Aug. 2023',
        'week 3 , Aug. 2023',
        'week 4 , Aug. 2023',
        'week 5 , Aug. 2023',
    ];

    const tests = myList.map((item, index) => ({
        test: item,
        date: List[index],
    }));

    return (
        <div className="Rtitle">
            {tests.map((item, index) => (
                <WordtestTitle key={index} test={item.test} date={item.date} />
            ))}
        </div>
    );
}

export default WordtestList;
