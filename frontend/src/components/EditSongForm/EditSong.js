import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editSong } from "../../store/songs";
import "./EditSongModal.css";

function EditSong() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;
    const { songId } = useParams();

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);

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
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
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
