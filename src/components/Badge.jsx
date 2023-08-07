import React from 'react';
import './Badge.scss';
import CheckMark from '../assets/images/check.svg';

function Badge({ imageUrl, active }) {
    return (
        <div className={active ? 'badge active' : 'badge'}>
            <div className={'badge-image'}>
                <img src={imageUrl} />
                <img src={CheckMark} className={'bagde-check'} />
            </div>
            <span className={'badge-title'}>1st Day</span>
            <span className={'badge-date'}>2023.6.2</span>
        </div>
    );
}

export default Badge;
