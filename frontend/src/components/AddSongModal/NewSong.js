import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addSong } from "../../store/songs";
import "./SongModal.css";

function AddSong() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [playlistId, setPlaylistId] = useState(0);
    const [url, setUrl] = useState(null);
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

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) setUrl(file);
    }

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
            <label>Song Image</label>
            <input
                className="song-img"
                type='text'
                value={songImg}
                onChange={(e) => setSongImg(e.target.value)}
            />
            <label>Upload Song</label>
            <input
                className="song-url"
                type="file"
                onChange={(e) => updateFile(e)}
                required
            />
            <button className="add-song-button" type="submit">
                Add song
            </button>
        </form>
    );
}

export default AddSong;
