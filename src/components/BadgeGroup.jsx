import React from 'react';
import './BadgeGroup.scss';
import Badge from './Badge';
import '../types/typedef';

/**
 * @param {Array<BadgeObject>} badges
 * @param {function({string}) | undefined} onClick
 */
function BadgeGroup({ badges, onClick = undefined }) {
    return (
        <div className="badge-group">
            {badges.map(badge => (
                <Badge
                    badge={badge}
                    onClick={
                        onClick !== undefined ? onClick(badge.id) : undefined
                    }
                />
            ))}
        </div>
    );
}

export default BadgeGroup;
