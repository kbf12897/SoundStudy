import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./AudioPlayer.css";
import { setSong } from "../../store/setSong";


function AudioPlayer(props) {
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = (song) => {
        dispatch(setSong(song))
    }


    return (
        <div className="buttons-div">
            <div key={props?.song.id}>
                <button
                    className="pause-play"
                    onClick={() => handlePlay(props?.song)}
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            </div>
        </div>
    );
};

export default AudioPlayer;
