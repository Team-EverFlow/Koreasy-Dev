/**
 * @typedef {Object} BadgeObject
 * @property {string} id
 * @property {string} title
 * @property {string} imageUrl
 * @property {boolean} active
 * @property {boolean} check
 * @property {Date} date
 *
 */

/**
 * @typedef {Object} ProfileObject
 * @property {string} id
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
