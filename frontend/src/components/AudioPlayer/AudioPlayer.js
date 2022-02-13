import { useState, useRef, useEffect } from "react";
import AudioDetails from "./AudioDetails";
import AudioControls from "./AudioControls";

function AudioPlayer(props) {
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);
    let audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    let currentSong = songs[props.currentSongIndex];

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    return (
        <div className="audio-player">
            <audio src={currentSong.url} ref={audioEl}></audio>
            <AudioDetails song={currentSong} />
            <AudioControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        </div>
    );
}

export default AudioPlayer;
