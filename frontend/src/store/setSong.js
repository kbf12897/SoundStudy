import { getSongs } from "./songs";

const SET_CURRENT_SONG = 'active/SET_CURRENT_SONG';
const SET_QUEUE = 'active/SET_QUEUE';

export const setSong = (song) => {
    return {
        type: SET_CURRENT_SONG,
        song
    }
}

export const setQueue = (songs) => {
    return {
        type: SET_QUEUE,
        songs
    }
}


export const loadSongandQueue = (song) => async dispatch => {
    const songs = await dispatch(getSongs());

    const songsMap = songs.filter((arrSong) => arrSong.id !== song.id);

    await dispatch(setQueue(songsMap));
    await dispatch(setSong(song));
}


const initialState = {
    currentSong: null,
    queue: []
};

const setSongReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.song
            }

        case SET_QUEUE:
            return {
                ...state,
                queue: action.songs
            }

        default:
            return state;
    }
}


export default setSongReducer;
