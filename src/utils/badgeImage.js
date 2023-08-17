/**
 * @param {BadgeObject} badge
 */
export function badgeImage(badge) {
    return badge.type !== 'special'
        ? require(`../assets/badges/${badge.type}_badge/${badge.type}_badge_lv${
              badge.level
          }${!badge.active ? '_disable' : ''}.svg`)
        : require(`../assets/badges/special_badge/${badge.imageId}${
              !badge.active ? '_disable' : ''
          }.svg`);
}
