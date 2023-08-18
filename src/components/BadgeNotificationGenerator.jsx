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
    window.addEventListener(callbackEventName, e => {
        console.log('listner callback:', callbackEventName);
        if (reference === null) return;
        setBadgeId(e.detail.badgeId);
        // console.log(reference.current);
        setTimeout(() => {
            reference.current.classList.add('show');
        }, 1000);
        setTimeout(function () {
            reference.current.classList.remove('show');
        }, 3000);
    });
    return () => <BadgeNotification badgeId={badgeId} reference={reference} />;
};

export default BadgeNotificationGenerator;
