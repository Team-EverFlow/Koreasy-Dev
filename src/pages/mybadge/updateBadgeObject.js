/**
 * @param {BadgeObject} badge
 * @param {Array<MyBadge>} myBadges
 * @returns {BadgeObject}
 */
export function updateBadgeObjectFromMyBadges(badge, myBadges) {
    const myBadgeInfo = myBadges.find(b => {
        return b.badgeId === badge.id;
    });
    if (myBadgeInfo === undefined) return badge;
    return updateBadgeObjectFromMyBadge(badge, myBadgeInfo);
}

/**
 * UserInformation 에서 불러온 MyBadge 데이터를 Badge Object에 적절하게 변환합니다.
 * @param {BadgeObject} badge
 * @param {MyBadge} myBadge
 * @returns {BadgeObject}
 */
export function updateBadgeObjectFromMyBadge(badge, myBadge) {
    return {
        ...badge,
        active: myBadge.progressValue >= badge.achievement ?? 0,
        currentAchievement: myBadge.progressValue,
        date: myBadge.addedTime.toDate(),
    };
}
