import React from 'react';
import chevron from '../assets/images/chevron.left.svg';
import './NavigationBar.scss';

const PageTitle = () => {
    let View = null;
    if (View === null) {
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
