import React from 'react';
import '../styles/components/BadgeNotification.scss';
import BadgeList from '../pages/mybadge/badgeList';
import { badgeImage } from '../utils/badgeImage';

/**
 * @param {String} badgeId
 * @param reference
 * @constructor
 */
const BadgeNotification = ({ badgeId, reference }) => {
    const badge = BadgeList.find(badge => badge.id === badgeId);
    if (!badge) {
        return <div ref={reference} />;
    }

    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };
    const BadgeImage = badgeImage(badge);

    return (
        <div className="badge-notification-overlay" ref={reference}>
            <div className="badgenotification-container">
                <div className="badgenotification-item">
                    <div className="badgenotification-picture">
                        <img
                            src={BadgeImage}
                            alt="Badge"
                            className="badge-image"
                        />
                    </div>

                    <div className="badgenotification-state">
                        <div className="badgenotification-title">
                            {badge.title}
                        </div>
                        <div className="badgenotification-date">
                            {formatDate(badge.date ?? new Date())}
                        </div>
                    </div>
                </div>
                <div className="badgenotification-text">
                    <div>Congratulations!</div>
                    <div>You've got</div>
                    <div>{badge.title}</div>
                    <div>🎉🎉🎉</div>
                </div>
            </div>
        </div>
    );
};

export default BadgeNotification;
