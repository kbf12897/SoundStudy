import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getSongs } from "../../store/songs";
import AddSongModal from "../AddSongModal";
import AudioPlayer from "../AudioPlayer";
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
            <AddSongModal />
            <div className="song-container">
                {songs.map((song) => {
                    return (
                        <div className={`grid${song.id} grid`}>
                            <NavLink key={song.id} to={`/songs/${song.id}`}>
                                <img
                                    className="song_img"
                                    src={song.songImg}
                                    alt="song-img"
                                />
                            </NavLink>
                            <div>{song.title}</div>
                            <AudioPlayer song={song} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainPage;
