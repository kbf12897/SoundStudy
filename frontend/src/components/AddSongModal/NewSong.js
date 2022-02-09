import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./SongModal.css";

function AddSong() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="new-song-form" onSubmit={handleSubmit}>
            <h3>Share your favorites</h3>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label for="song-name">Song Name</label>
            <input
                className="song-name"
                type="text"
                value={title}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <label for="song-url">Song Url</label>
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
