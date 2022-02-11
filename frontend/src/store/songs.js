import { csrfFetch } from "./csrf";

const LOAD = "/songs/LOAD";
const ADD = "/songs/ADD";
const DELETE = "/songs/DELETE";
const EDIT = "/songs/EDIT";

const load = (songs) => ({
    type: LOAD,
    songs,
});

const add = (song) => ({
    type: ADD,
    song,
});

const remove = (songId) => ({
    type: DELETE,
    songId,
});

const edit = (song) => ({
    type: EDIT,
    song,
});

export const getSongs = () => async (dispatch) => {
    const response = await csrfFetch("/api/songs");

    if (response.ok) {
        const songs = await response.json();
        dispatch(load(songs));
        return songs;
    }
};

export const getOneSong = (songId) => async (dispatch) => {
    const response = await fetch(`/api/songs/${songId}`);

    if (response.ok) {
        const songs = await response.json();
        dispatch(load(songs));
        return songs;
    }
};

export const addSong = (payload) => async (dispatch) => {
    const response = await csrfFetch("/api/songs", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    let newSong;
    if (response.ok) {
        newSong = await response.json();

        dispatch(add(newSong));
        return newSong;
    }
};

export const removeSong = (songId) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${songId}`, {
        method: "DELETE",
    });

    if (response.ok) {
        dispatch(remove(songId));
        return;
    }
};

export const editSong = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/songs/${payload.songId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (response.ok) {
        const newSong = await response.json();
        dispatch(edit(newSong));
        return newSong;
    }
};

const initialState = {
    songs: [],
};

const songReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD:
            newState = { ...state };
            const allSongs = {};
            action.songs.forEach((song) => {
                allSongs[song.id] = song;
            });
            newState.songs = allSongs;
            return newState;
        case ADD:
            newState = { ...state, songs: { ...state.songs } };
            newState.songs[action.song.id] = action.song;
            return newState;
        case DELETE:
            newState = { ...state };
            delete newState[action.songId];
            return newState;
        case EDIT:
            newState = { ...state };
            newState.songs[action.song.id] = action.song;
            return newState;
        default:
            return state;
    }
};

export default songReducer;
