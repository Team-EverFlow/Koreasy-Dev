import React from 'react';
import '../styles/components/Badge.scss';
import Check from '../assets/images/check.svg';
import '../types/typedef';
import moment from 'moment';

/**
 * Badge 컴포넌트
 * @param {BadgeObject} badge 뱃지
 * @param {MouseEventHandler<T> | undefined} onClick 클릭하면 반환하는 이벤트
 * @param {boolean} [checked=false] 뱃지 선택 유무 (MyBadgeSetting 에서만 사용되는 뷰)
 * @param {boolean} [detail=true] detail
 */
function Badge({ badge, onClick, checked = false, detail = true }) {
    if (!badge.hasOwnProperty('check')) {
        badge.check = false;
    }
    const badgeImage =
        badge.type !== 'special'
            ? require(`../assets/badges/${badge.type}_badge/${
                  badge.type
              }_badge_lv${badge.level}${!badge.active ? '_disable' : ''}.svg`)
            : require(`../assets/badges/special_badge/${badge.imageId}${
                  !badge.active ? '_disable' : ''
              }.svg`);
    return (
        <div
            className={
                checked
                    ? 'badge check'
                    : !badge.active
                    ? 'badge badge-active'
                    : 'badge'
            }
        >
            <div className="badge-image" onClick={onClick}>
                <img src={badgeImage} alt="badge icon" />
                <img src={Check} className="badge-check" alt="check-mark" />
            </div>
            <span className="badge-title">
                {badge.title} {badge.type !== 'special' && `Lv.${badge.level}`}
            </span>
            {detail && (
                <span className="badge-detail">
                    {badge.date !== undefined
                        ? moment(badge.date).format('YYYY-MM-DD')
                        : (badge.achievement !== undefined ||
                              badge.currentAchievement) !== undefined
                        ? `${badge.currentAchievement ?? 0} / ${
                              badge.achievement
                          } ${badge.achievementCommentSuffix ?? ''}`
                        : badge.description ?? ''}
                </span>
            )}
        </div>
    );
}

export default Badge;
