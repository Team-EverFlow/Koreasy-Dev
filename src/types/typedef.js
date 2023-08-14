/**
 * @typedef {Object} BadgeObject
 * @property {string} title
 * @property {("special" | "attend" | "comment" | "test")} type
 * @property {number} level
 * @property {boolean} active
 * @property {string | undefined} imageId
 * @property {number | undefined} achievement
 * @property {number | undefined} currentAchievement
 * @property {string | undefined} achievementCommentSuffix
 * @property {description | undefined} [description=''] description
 * @property {Date | undefined} [date=undefined] date
 *
 */

/**
 * @typedef {Object} ProfileObject
 * @property {string} name
 * @property {string} profileIcon
 * @property {Array<BadgeObject>} badges
 *
 */
