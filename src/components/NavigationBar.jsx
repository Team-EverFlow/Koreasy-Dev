import React from 'react';
import Chevron from './Chevrion';
import './NavigationBar.scss';
import { useNavigate } from 'react-router-dom';

// Navigation Bar
/**
 * @param {string | undefined} [viewName=PreviousView] viewName Navigation Bar에 들어갈 Page View Name
 */
const NavigationBar = ({ viewName = 'PreviousView' }) => {
    let navigate = useNavigate();
    const onPreviousViewClick = () => {
        navigate('./../');
    };

    return (
        <div className="previous-view">
            <span className="text" onClick={onPreviousViewClick}>
                <Chevron direction="Left" color="MainColor" />
                {viewName}
            </span>
            <div className="dump-box" />
        </div>
    );
};

export default NavigationBar;
