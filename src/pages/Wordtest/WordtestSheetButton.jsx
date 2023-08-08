import React from 'react';
import checkBoxActive from '../../assets/checkBox.svg';
import checkBoxInactive from '../../assets/checkBox-1.svg';

const WordTestSheetButton = ({ isChecked, onClick }) => {
    const buttonStyle = {
        display: 'flex', // 내용을 가운데로 정렬하기 위해 Flexbox 사용
        justifyContent: 'center', // 가로 방향 가운데 정렬
        alignItems: 'center', // 세로 방향 가운데 정렬
        border: 'none', // 테두리 제거
        background: 'none', // 배경 제거
        padding: 0, // 안쪽 여백 제거
    };

    return (
        <button className="button" style={buttonStyle} onClick={onClick}>
            {isChecked ? (
                <img src={checkBoxActive} alt="Button 2" />
            ) : (
                <img src={checkBoxInactive} alt="Button 1" />
            )}
        </button>
    );
};

export default WordTestSheetButton;
