import { csrfFetch } from "./csrf";

const LOAD = "/songs/LOAD";
const ADD = "/songs/ADD";
const DELETE = "/songs/DELETE";
const LOAD_ONE = "/songs/LOAD_ONE";

const load = (songs) => ({
    type: LOAD,
    songs,
});

const loadOne = (song) => ({
    type: LOAD_ONE,
    song,
});

const add = (song) => ({
    type: ADD,
    song,
});

const remove = (song) => ({
    type: DELETE,
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
    console.log("SONGID", songId);

    if (response.ok) {
        const songs = await response.json();
        dispatch(loadOne(songs[songId]));
        return songs[songId];
    }
};

export const addSong = (payload) => async (dispatch) => {
    const response = await csrfFetch("/api/songs", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    let newSong;
    console.log(response);
    if (response.ok) {
        newSong = await response.json();
        console.log(newSong);
        dispatch(add(newSong));
        return newSong;
    }
};

export const removeSong = () => async (dispatch) => {};

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
        case LOAD_ONE:
            newState = { ...state };
            newState.songs = action.song;
            return newState;
        default:
            return state;
    }
};

export default songReducer;
