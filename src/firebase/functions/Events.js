import {
    CREATE_COMMENT_EVENT_NAME,
    DELETE_COMMENT_EVENT_NAME,
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
