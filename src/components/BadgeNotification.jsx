import React from 'react';
import '../styles/components/BadgeNotification.scss';
import BadgeData from '../dummyData/BadgeData';

const BadgeNotification = ({ badgeId }) => {
    const badge = BadgeData.find(b => b.badgeId === badgeId);

    if (!badge) {
        return null;
    }

    const formatDate = date => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    return (
        <div className="badgenotification-container">
            <div className="badgenotification-item">
                <div className="badgenotification-picture">
                    <img
                        src={badge.imageUrl}
                        alt="Badge"
                        className="badge-image"
                    />
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
        </div>
    );
};

export default BadgeNotification;
