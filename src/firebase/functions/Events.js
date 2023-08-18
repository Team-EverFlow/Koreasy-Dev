import {
    ATTENDANCE_EVENT_NAME,
    CREATE_COMMENT_EVENT_NAME,
    DELETE_COMMENT_EVENT_NAME,
    TEST_RESULT_EVENT_NAME,
} from '../type/const';

export const CreateCommentEvent = () =>
    new CustomEvent(CREATE_COMMENT_EVENT_NAME, {
        detail: {
            op: +1,
        },
    });

export const DeleteCommentEvent = () =>
    new CustomEvent(DELETE_COMMENT_EVENT_NAME, {
        detail: {
            op: -1,
        },
    });
export const TestResultEvent = score =>
    new CustomEvent(TEST_RESULT_EVENT_NAME, {
        detail: {
            op: score,
        },
    });
export const AttendanceEvent = () =>
    new CustomEvent(ATTENDANCE_EVENT_NAME, {
        detail: {
            op: +1,
        },
    });
export const SuccessBadgeEvent = (eventId, badgeId) => {
    console.log('successs:', eventId);
    return new CustomEvent(eventId, {
        detail: {
            badgeId: badgeId,
        },
    });
};
