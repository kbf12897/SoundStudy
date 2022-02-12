import { csrfFetch } from "./csrf";

const LOAD = "/songs/:songId/comments/LOAD";
const ADD = "/songs/:songId/comments/ADD";
const DELETE = "/songs/:songId/comments/:commentId/DELETE";
const EDIT = "/songs/:songId/comments/:commentId/EDIT";

const load = (comments) => ({
    type: LOAD,
    comments,
});

const add = (comment) => ({
    type: ADD,
    comment,
});

const remove = (commentId) => ({
    type: DELETE,
    commentId,
});

const edit = (comment) => ({
    type: EDIT,
    comment,
});

export const getComments = (songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/${songId}/comments`);
    if (response.ok) {
        const comments = await response.json();
        dispatch(load(comments));
        return comments;
    }
};

export const addComment = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/${payload.songId}/comments`, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    let newComment;
    if (response.ok) {
        newComment = await response.json();
        dispatch(add(newComment));
        return newComment;
    }
};

export const deleteComment = (payload) => async (dispatch) => {
    const response = await csrfFetch(
        `/api/${payload.songId}/comments/${payload.commentId}`,
        {
            method: "DELETE",
        }
    );

    if (response.ok) {
        dispatch(remove(payload.commentId));
        return;
    }
};

export const editComment = (payload) => async (dispatch) => {
    const response = await csrfFetch(
        `/api/${payload.songId}/comments/${payload.commentId}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        }
    );

    if (response.ok) {
        const newComment = await response.json();
        dispatch(edit(newComment));
        return newComment;
    }
};

const commentReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = { ...state };
            const comments = {};
            action.comments.forEach((comment) => {
                comments[comment.id] = comment;
            });
            newState = { ...state, ...comments };
            return newState;
        case ADD:
            newState = { ...state };
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE:
            newState = { ...state };
            delete newState[action.commentId];
            return newState;
        case EDIT:
            newState = { ...state };
            newState[action.commentId] = action.comment;
            return newState;
        default:
            return state;
    }
};

export default commentReducer;
