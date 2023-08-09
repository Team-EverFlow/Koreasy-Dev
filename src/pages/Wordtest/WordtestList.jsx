import React from 'react';
import WordtestTitle from './WordTestTitle';
import '../../styles/WordTestList.scss';
import ListData from './DumpData'; // 해당 경로와 파일명에 따라 수정해야 함
import Header from '../../components/Header';

function WordTestList() {
    const tests = ListData.map(item => ({
        test: item.BigTitle,
        date: item.SmallTitle,
    }));

    return (
        <div>
            <Header />
            <div className="r-title">
                <p className="word-test-list-view-name">ViewName</p>
                {tests.map((item, index) => (
                    <WordtestTitle
                        key={index}
                        test={item.test}
                        date={item.date}
                    />
                ))}
            </div>
        </div>
    );
}

export default WordTestList;
