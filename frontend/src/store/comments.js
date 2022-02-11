import { csrfFetch } from "./csrf";

const LOAD = "/songs/:songId/comments/LOAD";

const load = (comments) => ({
    type: LOAD,
    comments,
});

export const getComments = (songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/${songId}/comments`);
    if (response.ok) {
        const comments = await response.json();
        console.log("COMMMMMMEEENNNNNTTSSS", comments);
        dispatch(load(comments));
        return comments;
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
            newState.comments = comments;
            return newState;
        default:
            return state;
    }
};

export default commentReducer;
