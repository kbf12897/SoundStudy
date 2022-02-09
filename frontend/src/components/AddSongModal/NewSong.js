import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddSong() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label>Song Name</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <label>Song Url</label>
            <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <button type="submit">Add song</button>
        </form>
    );
}

export default AddSong;
