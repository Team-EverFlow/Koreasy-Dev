import React from 'react';
import Chevron from './Chevrion';
import './NavigationBar.scss';

// Navigation Bar
/**
 * @param {string | undefined} [viewName=PreviousView] viewName Navigation Bar에 들어갈 Page View Name
 */
const NavigationBar = ({ viewName = 'PreviousView' }) => {
    return (
        <div className="previous-view">
            <div className="text">
                <Chevron direction="Left" color="MainColor" />
                {viewName}
            </div>
            <div className="dump-box" />
        </div>
    );
};

export default NavigationBar;
