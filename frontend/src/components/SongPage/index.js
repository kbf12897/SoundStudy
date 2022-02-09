import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./SongPage.css";

function SongPage() {
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);
    const { songId } = useParams();
    const song = songs[songId];

    return (
        <div>
            <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
            </div>
        </div>
    );
}

export default SongPage;
