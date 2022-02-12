import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./AudioControls.css";

function AudioControls() {
    const [isPlaying, setIsPlaying] = useState(false);

    let playPause;
    if (isPlaying) {
        playPause = (
            <button className="play-button" onClick={() => setIsPlaying(true)}>
                <FontAwesomeIcon icon={faPlay} />
            </button>
        );
    } else {
        playPause = (
            <button
                className="pause-button"
                onClick={() => setIsPlaying(false)}
            >
                <FontAwesomeIcon icon={faPause} />
            </button>
        );
    }

    return (
        <div className="buttons-div">
            <div className="pause-play">{playPause}</div>
            <button>
                <FontAwesomeIcon icon={faPause} />
            </button>
        </div>
    );
}

export default AudioControls;
