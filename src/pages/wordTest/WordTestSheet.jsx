import React, { useState } from 'react';
import checkBoxActive from '../../assets/checkBox.svg';
import checkBoxInactive from '../../assets/checkBox-1.svg';
import DumpQuiz from '../dumpPage/WordTestSheetDump';
// import '../../styles/WordTestSheet.scss';

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
    const [buttonStates, setButtonStates] = useState(
        Array(DumpQuiz.length).fill(false),
    );

    const handleClick = index => {
        const newButtonStates = buttonStates.map((_, idx) => idx === index);
        setButtonStates(newButtonStates);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {DumpQuiz.map((item, index) => (
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

const WordTestSheet = () => {
    const WordTestSet = ({ DumpQuiz }) => {
        return (
            <div>
                {DumpQuiz.map((item, index) => (
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
            <WordTestSet data={DumpQuiz} />
        </div>
    );
};

export default WordTestSheet;
