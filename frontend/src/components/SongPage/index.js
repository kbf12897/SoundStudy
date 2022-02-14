import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs";
import { removeSong } from "../../store/songs";
import EditSongModal from "../EditSongForm";
import Comments from "../Comments";
import "./SongPage.css";

function SongPage() {
    const { songId } = useParams();
    const song = useSelector((state) => state.songState.songs[songId]);
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const dispatch = useDispatch();
    const history = useHistory();

    //useEffect for getSongs
    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    //Deletes song and redirects to user-main
    const handleDelete = (songId) => {
        dispatch(removeSong(songId));
        history.push("/user-main");
    };

    // song edit and delete buttons if user is the one who posted
    const songEditLinks = (
        <div className="edit-delete">
            <EditSongModal />
            <button
                className="delete-song"
                onClick={() => handleDelete(songId)}
            >
                Delete song
            </button>
        </div>
    );

    if (!song) {
        return null;
    } else {
        return (
            <div>
                <div className="song-div">
                    <div className="song-info">
                        <h3 className="song-title">{song.title}</h3>
                        <img
                            className="individual-no-song-img"
                            src="https://cdn2.iconfinder.com/data/icons/audio-files-essential/48/v-30-512.png"
                        />
                        {song.userId === userId ? songEditLinks : null}
                    </div>
                    <Comments />
                </div>
            </div>
        );
    }
}

export default SongPage;
