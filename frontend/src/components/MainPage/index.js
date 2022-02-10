import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs";
import AddSongModal from "../AddSongModal";
import "./MainPage.css";

function MainPage() {
    const sessionUser = useSelector((state) => state.session);
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);
    const dispatch = useDispatch();

    const [isPlaying, setIsPlaying] = useState(false);

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
                {songs.map(({ id, title }) => {
                    return (
                        <div className={`grid${id} grid`} key={id}>
                            <NavLink key={id} to={`/songs/${id}`}>
                                <img
                                    className="no-song-img"
                                    src="https://cdn2.iconfinder.com/data/icons/audio-files-essential/48/v-30-512.png"
                                />
                            </NavLink>
                            <div>{title}</div>
                            <div className="play-button"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainPage;
