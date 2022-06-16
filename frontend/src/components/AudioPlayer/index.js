import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./AudioPlayer.css";


function AudioPlayer(props) {
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);
    const [isPlaying, setIsPlaying] = useState(false);


    return (
        <div className="buttons-div">
            <div key={props.song.id}>
                <button
                    className="pause-play"
                    onClick={() => props.setSongPlaying(props.song)}
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            </div>
        </div>
    );
}

export default AudioPlayer;
