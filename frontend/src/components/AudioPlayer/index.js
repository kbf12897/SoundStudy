import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./AudioPlayer.css";
import { setSong } from "../../store/setSong";


function AudioPlayer(props) {
    const dispatch = useDispatch();
    const song = useSelector(state => state?.setSongReducer);
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);

    const [isPlaying, setIsPlaying] = useState(false);


    const handlePlay = (song) => {
        dispatch(setSong(song));
        song.next = songsObj[song.id + 1] ? songsObj[song.id + 1] : songsObj[songs[0].id];
        song.prev = songsObj[song?.id - 1] ? songsObj[song?.id - 1] : songsObj[songs[songs.length - 1].id];
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
