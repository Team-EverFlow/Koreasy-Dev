import React from 'react';
import './Badge.scss';
import Check from '../assets/images/check.svg';
import '../types/typedef';

/**
 * Badge 컴포넌트
 * @param {BadgeObject} badge 뱃지
 * @param {MouseEventHandler<T> | undefined} onClick 클릭하면 반환하는 이벤트
 */
function Badge({ badge, onClick }) {
    return (
        <div className={badge.active ? 'badge active' : 'badge'}>
            <div className={'badge-image'} onClick={onClick}>
                <img src={badge.imageUrl} />
                <img src={Check} className={'bagde-check'} />
            </div>
            <span className={'badge-title'}>{badge.title}</span>
            <span className={'badge-date'}>{badge.date}</span>
        </div>
    );
}

export default Badge;
