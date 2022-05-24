import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../store/songs";
import "./SongModal.css";

function AddSong() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [playlistId, setPlaylistId] = useState('');
    const [songImg, setSongImg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            userId,
            playlistId,
            songImg,
            url,
            title,
        };

        return await dispatch(addSong(payload));
    };

    return (
        <form className="new-song-form" onSubmit={handleSubmit}>
            <h3>Share your favorites</h3>
            <label>Song Name</label>
            <input
                className="song-name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label>Song Url</label>
            <input
                className="song-url"
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <button className="add-song-button" type="submit">
                Add song
            </button>
        </form>
    );
}

export default AddSong;
