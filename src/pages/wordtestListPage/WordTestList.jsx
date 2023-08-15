import React from 'react';
import WordTestCell from './WordTestCell';
import ListData from '../../dummyData/TestListData';
import Header from '../../components/Header';

const WordTestList = () => {
    const tests = ListData.map(item => ({
        listTitle: item.listTitle,
        dateText: item.dateText,
    }));

    return (
        <div>
            <Header isNavigationBar={false} viewName="Wordtest" />
            {tests.map((item, index) => (
                <WordTestCell
                    key={index}
                    listTitle={item.listTitle}
                    dateText={item.dateText}
                />
            ))}
        </div>
    );
};

export default WordTestList;
