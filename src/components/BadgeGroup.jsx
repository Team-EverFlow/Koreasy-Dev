import React from 'react';
import './BadgeGroup.scss';
import Badge from './Badge';
import '../types/typedef';

/**
 * @param {Array<BadgeObject>} badges
 * @param {MouseEventHandler<function({index: number, id: number})> | undefined} onClick
 */
function BadgeGroup({ badges, onClick = undefined }) {
    return (
        <div className="badge-group">
            {badges.map((badge, index) => (
                <Badge
                    badge={badge}
                    onClick={() => {
                        return onClick !== undefined
                            ? onClick(index, badge.id)
                            : undefined;
                    }}
                />
            ))}
        </div>
    );
}

export default BadgeGroup;
