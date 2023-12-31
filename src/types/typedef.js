/**
 * @typedef {Object} BadgeObject
 * @property {string | undefined} id
 * @property {string} title
 * @property {("special" | "attend" | "comment" | "test")} type
 * @property {number} level
 * @property {boolean} active
 * @property {string | undefined} [imageId=undefined] imageId
 * @property {number | undefined} [achievement=undefined] achievement
 * @property {number | undefined} [currentAchievement=undefined] currentAchievement
 * @property {string | undefined} [achievementCommentSuffix=undefined] achievementCommentSuffix
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

/**
 * @typedef {Object} QuizChooseStatus
 * @property {boolean | undefined} result
 * @property {number | null} selectedOptionIndex
 * @property {number | null} correctOptionIndex
 * @property {number | null} incorrectOptionIndex
 * @property {boolean} isCorrect
 *
 */
