import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./AudioPlayer.css";
import { setSong, loadSongandQueue } from "../../store/setSong";


function AudioPlayer(props) {
    const dispatch = useDispatch();
    const song = useSelector(state => state?.setSongReducer);
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);

    const [isPlaying, setIsPlaying] = useState(false);

    const songProp = props.song;

    const handlePlay = (chosenSong) => {
        dispatch(loadSongandQueue(chosenSong));
    }


    return (
        <div className="buttons-div">
            <div className="play-button-div song-page" key={props?.song.id}>
                <button
                    className="pause-play main"
                    onClick={() => handlePlay(songProp)}
                >
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>
            </div>
        </div>
    );
};

export default AudioPlayer;
