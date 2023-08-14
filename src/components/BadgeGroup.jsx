import React from 'react';
import './BadgeGroup.scss';
import Badge from './Badge';
import '../types/typedef';

/**
 * @param {Array<BadgeObject>} badges
 * @param {MouseEventHandler<function({index: number, id: number})> | undefined} onClick
 * @param {Array<boolean>} badgesChecked
 */
function BadgeGroup({
    badges,
    onClick = undefined,
    badgesChecked = undefined,
}) {
    if (badgesChecked === undefined)
        badgesChecked = Array(badges.length).fill(false);
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
                    checked={badgesChecked[index]}
                />
            ))}
        </div>
    );
}

export default BadgeGroup;
