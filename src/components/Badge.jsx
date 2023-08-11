import React from 'react';
import './Badge.scss';
import Check from '../assets/images/success.svg';
import '../types/typedef';
import moment from 'moment';

/**
 * Badge 컴포넌트
 * @param {BadgeObject} badge 뱃지
 * @param {MouseEventHandler<T> | undefined} onClick 클릭하면 반환하는 이벤트
 */
function Badge({ badge, onClick }) {
    return (
        <div
            className={
                badge.check
                    ? 'badge check'
                    : badge.active
                    ? 'badge badge-active'
                    : 'badge'
            }
        >
            <div className="badge-image" onClick={onClick}>
                <img src={badge.imageUrl} alt="badge icon" />
                <img src={Check} className="badge-check" alt="check-mark" />
            </div>
            <span className="badge-title">{badge.title}</span>
            <span className="badge-date">
                {moment(badge.date).format('YYYY-MM-DD')}
            </span>
        </div>
    );
}

export default Badge;
