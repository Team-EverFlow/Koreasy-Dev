import React from 'react';
import './BadgeGroup.scss.scss';
import Badge from './Badge';
import '../types/typedef';

/**
 * @param {Array<BadgeObject>} badges
 * @param {function({string}, {MouseEvent}) | undefined} onClick
 */
function BadgeGroup({ badges, onClick }) {
    return (
        <div className={'badge-group'}>
            {badges.map(badge => (
                <Badge
                    badge={badge}
                    onClick={(T) => {
                        onClick !== null ? onClick(badge.id, T) : undefined;
                    }}
                />
            ))}
        </div>
    );
}

export default BadgeGroup;
