import React from 'react';
import Chevron from './Chevrion';
import './NavigationBar.scss';

const NavigationBar = ({ viewName }) => {
    // 컴포넌트에서 인자 전달시 사용
    /**
     * @View {string | undefined}
     */
    return (
        <div className="previous-view">
            <div className="text">
                <Chevron direction="Left" color="MainColor" />
                {viewName === undefined ? 'PreviousView' : viewName}
            </div>
            <div className="dump-box" />
        </div>
    );
};

export default NavigationBar;
