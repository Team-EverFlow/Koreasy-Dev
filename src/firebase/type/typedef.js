/**
 * @typedef {Object} UserInformation
 * @property {string} username
 * @property {string} profileBackgroundColor
 * @property {string} profileAvatarUrl
 * @property {Array<string>} [recentWord]
 * @property {Array<string>} [repBadge]
 * @property {Array<Bookmark>} [bookmark]
 *
 */

/**
 * @typedef {Object} Bookmark
 * @property {string} UID
 * @property {Date} date
 */

/**
 * @typedef {Object} Word
 * @property {string} wordKr
 * @property {string} wordEn
 * @property {string} pronunciation
 * @property {string} meaning
 * @property {Array<string>} exampleSentence
 */
