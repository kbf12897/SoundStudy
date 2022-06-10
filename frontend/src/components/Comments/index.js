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
    const commentOwner = sessionUser.username;
    const userId = sessionUser.id;
    const commentsObj = useSelector((state) => state.commentState);
    const comments = Object.values(commentsObj);

    const dispatch = useDispatch();
    const [commentBody, setCommentBody] = useState("");
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)

    //useEffect for getComments
    useEffect(() => {
        dispatch(getComments(songId));
    }, [dispatch]);

    //addComment handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();

        let payload = {
            userId,
            songId,
            commentBody,
            commentOwner
        };
        setCommentBody("");
        return dispatch(addComment(payload));
    };

    const handleDelete = async (songId, commentId) => {
        const payload = {
            songId,
            commentId,
        };

        await dispatch(deleteComment(payload));
        setConfirmDeleteModal(false);
    };

    const confirmDelete = async (comment) => {
        setConfirmDeleteModal(true);
    }

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
                    <div className="comment-user">{commentOwner}</div>
                    <li key={comment.id} className="comment">
                        {comment.commentBody}
                        <EditCommentModal props={{ comment }} />
                        {confirmDeleteModal &&
                            <div className="confirm-delete-container">
                                <div className="confirm-delete-sentence">Are you sure you want to delete this comment?</div>
                                <button className='confirm-delete-button' onClick={() => handleDelete(comment.songId, comment.id)}>Confirm</button>
                            </div>
                        }
                        <button
                            onClick={() =>
                                confirmDelete(comment)
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
