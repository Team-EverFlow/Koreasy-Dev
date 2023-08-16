/**
 * @typedef {Object} UserInformation
 * @property {string} username
 * @property {string} profileBackgroundColor
 * @property {string} profileAvatarUrl
 * @property {Array<string>} [recentWord]
 * @property {Array<string>} [repBadge]
 * @property {Array<Bookmark>} [bookmark]
 * @property {Array<TestScore>} [testScore]
 * @property {import('firebase/firestore').Timestamp[]} [attendance]
 * @property {MyBadge[]} [myBadges]
 */

/**
 * @typedef {Object} TestScore
 * @property {string} testDataId
 * @property {number} solve
 * @property {number} question
 */
/**
 * @typedef {Object} Bookmark
 * @property {string} id
 * @property {import('firebase/firestore').Timestamp} date
 */

/**
 * @typedef {Object} Word
 * @property {string} id
 * @property {string} wordKr
 * @property {string} wordEn
 * @property {string} pronunciation
 * @property {string} meaning
 * @property {ExampleSentence[]} exampleSentence
 * @property {Array<Comment>} comments
 * @property {import('firebase/firestore').Timestamp} addedTime
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
 * @typedef {Object} MyBadge
 * @property {string} badgeId
 * @property {number} progressValue
 */
/**
 * @typedef {Object} Badge
 * @property {string} id
 * @property {string} name
 * @property {string} imageUrl
 * @property {string} description
 * @property {number} goalValue
 * @property {string[]} eventName
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

/**
 * @typedef {Object} Comment
 * @property {string} id
 * @property {string} username
 * @property {string} userId
 * @property {import('firebase/firestore').Timestamp} date
 * @property {string} comment
 * @property {string[]} reactUsers
 */
