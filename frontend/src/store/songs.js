const LOAD = "/songs/LOAD";

const load = (songs) => ({
    type: LOAD,
    songs,
});

export const getSongs = () => async (dispatch) => {
    const response = await fetch("/api/songs");

    if (response.ok) {
        const songs = await response.json();
        dispatch(load(songs));
    }
    return response;
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
        default:
            return state;
    }
};

export default songReducer;
