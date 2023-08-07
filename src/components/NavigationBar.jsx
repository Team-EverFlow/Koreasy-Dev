import React from 'react';
import chevron from '../assets/images/chevron.left.svg';
import './NavigationBar.scss';

const PageTitle = ({ value }) => {
    // 컴포넌트에서 인자 전달시 사용
    /**
     * @View {string || undefined}
     */
    let View = value;
    if (View === undefined) {
        View = 'PreviousView';
    }
    return (
        <div className="previous-view">
            <div className="text">
                <img src={chevron} alt="chevron-left" className="chevron" />
                {View}
            </div>
            <div className="dump-box" />
        </div>
    );
};

export default PageTitle;
