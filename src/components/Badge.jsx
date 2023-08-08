import React from 'react';
import './Badge.scss';
import Check from '../assets/images/check.svg';
import '../types/typedef';

/**
 * Badge 컴포넌트
 * @param {Badge} badge 뱃지
 */
function Badge({ badge }) {
    return (
        <div className={badge.active ? 'badge active' : 'badge'}>
            <div className={'badge-image'}>
                <img src={badge.imageUrl} />
                <img src={Check} className={'bagde-check'} />
            </div>
            <span className={'badge-title'}>{badge.title}</span>
            <span className={'badge-date'}>{badge.date}</span>
        </div>
    );
}

export default Badge;
