import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSongs } from "../../store/songs";
import { removeSong } from "../../store/songs";
import EditSongModal from "../EditSongForm";
import AudioPlayer from '../AudioPlayer';
import Comments from "../Comments";
import "./SongPage.css";

function SongPage() {
    const { songId } = useParams();
    const song = useSelector((state) => state.songState[songId]);
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    //useEffect for getSongs
    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    //Deletes song and redirects to user-main
    const handleDelete = (songId) => {
        dispatch(removeSong(songId));
        history.push("/user-main");
    };

    const confirmDelete = async (song) => {
        setConfirmDeleteModal(!confirmDeleteModal);
    }

    // song edit and delete buttons if user is the one who posted
    const songEditLinks = (
        <div className="edit-delete">
            <EditSongModal />
            <button
                className="delete-song"
                onClick={() => confirmDelete(songId)}
            >
                Delete song
            </button>
        </div>
    );


    if (!song) {
        return null;
    } else {
        return (
            <div>
                <div className="song-div">
                    <div className="song-info">
                        <h3 className="song-title">{song?.title}</h3>
                        {song.songImg && <img
                            className="individual-song-img"
                            src={song?.songImg}
                            alt='song-img'
                        />}
                        {!song.songImg && <img className="no-song-img" src='https://www.vhv.rs/dpng/d/42-424143_music-note-no-background-hd-png-download.png' alt='song-img'/>}
                        <AudioPlayer song={song}/>
                        {confirmDeleteModal &&
                            <div className="confirm-song-delete-container">
                                <div className="confirm-song-delete-sentence">Confirm Delete</div>
                                <button className='confirm-song-delete-button' onClick={() => handleDelete(song.id, song.userId)}>Confirm</button>
                            </div>
                        }
                        {song?.userId === userId ? songEditLinks : null}
                    </div>
                    <Comments />
                </div>
            </div>
        );
    };
};

export default SongPage;
