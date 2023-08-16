import React from 'react';
import '../styles/components/BadgeGroup.scss';
import Badge from './Badge';
import '../types/typedef';

/**
 * @param {Array<BadgeObject>} badges
 * @param {MouseEventHandler<function({index: number, id: number})> | undefined} onClick
 * @param {Array<boolean>} badgesChecked
 * @param {boolean} [detail=true] detail
 */
function BadgeGroup({
    badges,
    onClick = undefined,
    badgesChecked = undefined,
    detail = true,
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
                    detail={detail}
                    key={index}
                />
            ))}
        </div>
    );
}

export default BadgeGroup;
