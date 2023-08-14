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
 * @property {string} id
 * @property {Date} date
 */

/**
 * @typedef {Object} Word
 * @property {string} wordKr
 * @property {string} wordEn
 * @property {string} pronunciation
 * @property {string} meaning
 * @property {ExampleSentence[]} exampleSentence
 */

/**
 * @typedef {Object} ExampleSentence
 * @property {string} sentenceKr
 * @property {string} sentenceEn
 */

/**
 * @typedef {Object} WeekWord
 * @property {string} dateText
 * @property {string} dateRange
 * @property {string[]} wordIdList
 */

/**
 * @typedef {Object} Badge
 * @property {string} name
 * @property {string} imageUrl
 * @property {string} description
 * @property {string} goalValue
 * @property {string} eventName
 */

/**
 * @typedef {Object} Quiz
 * @property {int} id
 * @property {string} question
 * @property {string[]} choose
 * @property {string} answer
 */

/**
 * @typedef {Object} TestData
 * @property {string} title
 * @property {string} subtitle
 * @property {Quiz[]} quizzes
 */

/**
 * @typedef {Object} WordTestView
 * @property {string} title
 * @property {string} date
 * @property {string} testDataId
 */
