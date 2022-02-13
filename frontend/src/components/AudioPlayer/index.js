import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./AudioPlayer.css";

function AudioPlayer(props) {
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioEl = useRef(null);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex, songs.length]);

    const playSongHandler = (song) => {
        setCurrentSongIndex(song.id);
        setIsPlaying(!isPlaying);
        audioEl.current.play();
    };

    return (
        <div className="buttons-div">
            <audio ref={audioEl}>
                <source src={`./music/${props.song.url}`}></source>
            </audio>
            <button
                className="pause-play"
                onClick={() => playSongHandler(props.song)}
            >
                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
        </div>
    );
}

export default AudioPlayer;
