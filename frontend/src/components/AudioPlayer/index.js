import { useState } from "react";
import { useSelector } from "react-redux";
import AudioControls from "./AudioControls";
import "./AudioPlayer.css";

function AudioPlayer() {
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);

    const [playingSongIndex, setPlayingSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(playingSongIndex + 1);

    const currentSong = songs[playingSongIndex];

    if (!currentSong) {
        return null;
    } else {
        return (
            <div className="player-container">
                <div className="current-song">{currentSong.title}</div>
                <AudioControls />
            </div>
        );
    }
}

export default AudioPlayer;
