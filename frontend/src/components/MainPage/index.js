import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs";
import ViewSong from "./ViewSong";
import AddSongModal from "../AddSongModal";
import "./MainPage.css";

import { ProgressBar } from "../../context/ProgressBar";


function MainPage() {
    const sessionUser = useSelector((state) => state.session);
    const songsObj = useSelector((state) => state.songState);
    const songs = Object.values(songsObj);
    const dispatch = useDispatch();

    const [songPlaying, setSongPlaying] = useState(null);

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    if (!sessionUser) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <img
                className="top-img"
                alt="lofi-pic"
                src="https://f4.bcbits.com/img/0024563747_100.png"
            />
            <AddSongModal />
            <div className="song-container">
                {songs.map((song) => {
                    return (
                        <ViewSong song={song} setSongPlaying={setSongPlaying} />
                    );
                })}
            </div>
            {songPlaying && <ProgressBar song={songPlaying} />}
        </div>
    );
}

export default MainPage;
