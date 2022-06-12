import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AudioPlayer from "../AudioPlayer";
import './MainPage.css';

const ViewSong = ({ song, setSongPlaying }) => {



    return (
        <div className={`grid${song.id} grid`}>
            <NavLink key={song.id} to={`/songs/${song.id}`}>
                {!song.songImg && <img className="no-song-img" src='https://www.vhv.rs/dpng/d/42-424143_music-note-no-background-hd-png-download.png' alt='song-img'/>}
                {song.songImg && <img
                    className="song_img"
                    src={song.songImg}
                    alt="song-img"
                />}
            </NavLink>
            <div>{song.title}</div>
            <AudioPlayer song={song} setSongPlaying={setSongPlaying} />
        </div>
    );
}

export default ViewSong;
