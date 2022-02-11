import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSongs } from "../../store/songs";
import { removeSong } from "../../store/songs";
import { getComments } from "../../store/comments";
import EditSongModal from "../EditSongForm";
import "./SongPage.css";

function SongPage() {
    const { songId } = useParams();
    const song = useSelector((state) => state.songState.songs[songId]);
    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;
    const commentsObj = useSelector((state) => state.commentState);
    console.log("COMMENTS OBJECT", commentsObj);
    const comments = Object.values(commentsObj);
    const comm = Object.values(comments);
    console.log("COMMENTS LINE 17", comm);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getComments(songId));
    }, [dispatch]);

    const handleDelete = (songId) => {
        dispatch(removeSong(songId));
        history.push("/user-main");
    };

    const filteredComments = comments.filter((comment) => {
        console.log("COMMENTCOMMENT", comment);
        return comment.songId === songId;
    });
    console.log("FILTERFILTERFELTER", filteredComments);
    // console.log("FILTERFILTE", comments);

    let songEditLinks;
    if (userId === song.userId) {
        songEditLinks = (
            <div className="edit-delete">
                <EditSongModal />
                <button
                    className="delete-song"
                    onClick={() => handleDelete(songId)}
                >
                    Delete song
                </button>
            </div>
        );
    }

    if (!comments || !song) {
        return null;
    } else {
        return (
            <div>
                <div className="song-div">
                    <div className="song-info">
                        <h3 className="song-title">{song.title}</h3>
                        <img
                            className="no-song-img"
                            src="https://cdn2.iconfinder.com/data/icons/audio-files-essential/48/v-30-512.png"
                        />
                        {songEditLinks}
                    </div>
                    <div className="comment-div">
                        <h4 className="comment-label">Comments</h4>
                        <div className="comment-input-button">
                            <input
                                className="comment-input"
                                placeholder="Write a comment"
                                required
                            ></input>
                            <button className="comment-button">Submit</button>
                        </div>
                        <div className="comment-section">
                            <ul>
                                {filteredComments.map((comment) => {
                                    return (
                                        <li
                                            className="comment"
                                            key={comment.id}
                                        >
                                            {comment.commentBody}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SongPage;
