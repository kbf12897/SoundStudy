import { csrfFetch } from "./csrf";

const LOAD = "/songs/:songId/comments/LOAD";
const ADD = "/songs/:songId/comments/ADD";

const load = (comments) => ({
    type: LOAD,
    comments,
});

const add = (comment) => ({
    type: ADD,
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
            newState = { ...state, comments: { ...state.comments } };
            newState.comments[action.comment.id] = action.comment;
            return newState;
        default:
            return state;
    }
};

export default commentReducer;
