import React, { useRef } from 'react';
import '../styles/components/BadgeNotification.scss';
import BadgeList from '../pages/mybadge/badgeList';
import { badgeImage } from '../utils/badgeImage';

/**
 * @param {String} badgeId
 * @param {boolean} show
 * @returns {Array<JSX.Element | function()>}
 * @constructor
 */
const BadgeNotification = ({ badgeId }) => {
    const badge = BadgeList.find(b => b.id === badgeId);
    const reference = useRef(null);
    const onBadgeNotification = () => {
        if (reference === null) return;
        reference.current.classList.add('show');
        setTimeout(function () {
            reference.current.classList.remove('show');
        }, 3000);
    };

    if (!badge) {
        return [<div />, onBadgeNotification];
    }

    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };
    const BadgeImage = badgeImage(badge);

    return [
        <div className="badgenotification-container" ref={reference}>
            <div className="badgenotification-item">
                <div className="badgenotification-picture">
                    <img src={BadgeImage} alt="Badge" className="badge-image" />
                </div>

                <div className="badgenotification-state">
                    <div className="badgenotification-title">{badge.title}</div>
                    <div className="badgenotification-date">
                        {formatDate(badge.date)}
                    </div>
                </div>
            </div>
            <div className="badgenotification-text">
                <div>Congratulations!</div>
                <div>You've got</div>
                <div>{badge.title}</div>
                <div>🎉🎉🎉</div>
            </div>
        </div>,
        onBadgeNotification,
    ];
};

export default BadgeNotification;
