import React from 'react';
import WordTestTitle from './WordTestTitle';
import '../../styles/WordTestList.scss';
import ListData from './DumpData';
import Header from '../../components/Header';

const WordTestList = () => {
    const tests = ListData.map(item => ({
        test: item.BigTitle,
        date: item.SmallTitle,
    }));

    return (
        <div>
            <Header />
            <div className="r-title">
                <div className="word-test-list-view-name">ViewName</div>
                {tests.map((item, index) => (
                    <WordTestTitle
                        key={index}
                        test={item.test}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    );
};

export default WordTestList;
