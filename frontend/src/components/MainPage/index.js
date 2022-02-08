import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs";
import "./MainPage.css";

function MainPage() {
    const sessionUser = useSelector((state) => state.session);
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);
    const dispatch = useDispatch();

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
            <div className="add-song">
                <input className="add-song-input" type="text"></input>
                <button className="add-song-button">Upload your own</button>
            </div>
            <div className="song-container">
                {songs.map(({ id, title }) => {
                    return (
                        <div className={`grid${id} grid`} key={id}>
                            <img
                                className="no-song-img"
                                src="https://cdn2.iconfinder.com/data/icons/audio-files-essential/48/v-30-512.png"
                            />
                            <div>{title}</div>
                            <div class="play-button"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainPage;
