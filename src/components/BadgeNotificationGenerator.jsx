import React, { useRef, useState } from 'react';
import '../styles/components/BadgeNotification.scss';
import BadgeNotification from './BadgeNotification';

/**
 * @param {string} callbackEventName
 * @constructor
 */
const BadgeNotificationGenerator = callbackEventName => {
    const reference = useRef(null);
    const [badgeId, setBadgeId] = useState('');
    window.addEventListener(callbackEventName, async e => {
        if (reference === null) return;
        setBadgeId(e.detail.badgeId);
        reference.current.classList.add('show');
        setTimeout(function () {
            reference.current.classList.remove('show');
        }, 3000);
    });
    return () => <BadgeNotification badgeId={badgeId} reference={reference} />;
};

export default BadgeNotificationGenerator;
