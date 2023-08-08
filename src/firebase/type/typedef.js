/**
 * @typedef {Object} UserInformation
 * @property {string} username
 * @property {string} profileBackgroundColor
 * @property {string} profileAvatarUrl
 * @property {Array<string>} [recentWord]
 * @property {Array<string>} [repBadge]
 * @property {Array<Bookmark>} [bookmark]
 * @property {Array<BadgeProgess>} [badgeProgess]
 * @property {Array<string>} [myBadges]
 */

/**
 * @typedef {Object} Bookmark
 * @property {string} id
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

/**
 * @typedef {Object} Badge
 * @property {string} name
 * @property {string} achievementDescription
 * @property {int} achivementValue
 * @property {string} eventName
 */

/**
 * @typedef {Object} BadgeProgess
 * @property {string} id
 * @property {string} status
 */
