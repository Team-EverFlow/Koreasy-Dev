import React from 'react';
import './BadgeGroup.scss.scss';
import Badge from './Badge';
import '../types/typedef';

/**
 *
 * @param {Array[Badge]} badges
 * @param onClick
 */
function BadgeGroup({ badges, onClick }) {
    return (
        <div className={'badge-group'}>
            {badges.map(badge => (
                <Badge badge={badge} onClick={onClick} />
            ))}
        </div>
    );
}

export default BadgeGroup;
