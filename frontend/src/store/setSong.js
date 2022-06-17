const SET_CURRENT_SONG = 'active/SET_CURRENT_SONG';


export const setSong = (song) => {
    return {
        type: SET_CURRENT_SONG,
        song
    }
}

const initialState = {
    isPlaying: null,
    currentSong: null,
    next: null,
    prev: null
};

const setSongReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.song
            }
        default:
            return state;
    }
}


export default setSongReducer;
