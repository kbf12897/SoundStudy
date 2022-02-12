import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
    addComment,
    getComments,
    editComment,
    deleteComment,
} from "../../store/comments";
import EditCommentModal from "../EditCommentForm";
import "./Comments.css";

function Comments() {
    const { songId } = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const username = sessionUser.username;
    const userId = sessionUser.id;
    const commentsObj = useSelector((state) => state.commentState);
    const comments = Object.values(commentsObj);

    const dispatch = useDispatch();
    const [commentBody, setCommentBody] = useState("");

    //useEffect for getComments
    useEffect(() => {
        dispatch(getComments(songId));
    }, [dispatch]);

    //addComment handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            userId,
            songId,
            commentBody,
        };
        setCommentBody("");
        return await dispatch(addComment(payload));
    };

    const handleDelete = (songId, commentId) => {
        const payload = {
            songId,
            commentId,
        };

        return dispatch(deleteComment(payload));
    };

    //filters comments for specific song page
    const filteredComments = comments.filter((comment) => {
        return parseInt(comment.songId) == parseInt(songId);
    });

    let songComments;
    if (!comments) {
        return null;
    } else {
        songComments = filteredComments.map((comment) => {
            return (
                <div className="comment-container">
                    <div className="comment-user">{username}</div>
                    <li key={comment.id} className="comment">
                        {comment.commentBody}
                        <EditCommentModal props={{ comment }} />
                        <button
                            onClick={() =>
                                handleDelete(comment.songId, comment.id)
                            }
                            className="delete-comment-button"
                        >
                            delete
                        </button>
                    </li>
                    <div className="comment-buttons"></div>
                </div>
            );
        });
    }

    return (
        <div className="comment-div">
            <h4 className="comment-label">Comments</h4>
            <form className="comment-form" onSubmit={handleSubmit}>
                <input
                    onChange={(e) => setCommentBody(e.target.value)}
                    className="comment-input"
                    placeholder="Write a comment"
                    value={commentBody}
                    required
                ></input>
                <button className="comment-button">Submit</button>
            </form>
            <div className="comment-section">
                <ul className="comment-ul">{songComments}</ul>
            </div>
        </div>
    );
}

export default Comments;
