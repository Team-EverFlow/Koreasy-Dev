import React from 'react';
import Chevron from './Chevrion';
import './NavigationBar.scss';

const NavigationBar = ({ View }) => {
    // 컴포넌트에서 인자 전달시 사용
    /**
     * @View {string | undefined}
     */
    return (
        <div className="previous-view">
            <div className="text">
                <Chevron direction="Left" color="MainColor" />
                {View === undefined ? 'PreviousView' : View}
            </div>
            <div className="dump-box" />
        </div>
    );
};

export default NavigationBar;
