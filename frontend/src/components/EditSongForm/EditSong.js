import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editSong } from "../../store/songs";
import "./EditSongModal.css";

function EditSong() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const { songId } = useParams();
    const song = useSelector((state) => state.songState.songs[songId]);
    const userId = sessionUser.id;

    const [title, setTitle] = useState(song.title);
    const [url, setUrl] = useState(song.url);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            songId,
            userId,
            url,
            title,
        };

        return await dispatch(editSong(payload));
    };

    return (
        <form className="edit-song-form" onSubmit={handleSubmit}>
            <h3>Edit song</h3>
            <label>Song Name</label>
            <input
                className="edit-song-name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>Song Url</label>
            <input
                className="edit-song-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <button className="edit-song-button" type="submit">
                Edit song
            </button>
        </form>
    );
}

export default EditSong;
