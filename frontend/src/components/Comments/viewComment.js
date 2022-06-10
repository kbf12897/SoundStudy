import { useState } from "react";
import { deleteComment } from "../../store/comments";
import { useDispatch, useSelector } from "react-redux";
import EditCommentModal from "../EditCommentForm";
import './Comments.css';

const ViewComment = ({ comment }) => {
    const dispatch = useDispatch();
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);

    const handleDelete = async (songId, commentId) => {
        const payload = {
            songId,
            commentId,
        };

        await dispatch(deleteComment(payload));
        setConfirmDeleteModal(false);
    };

    const confirmDelete = async (comment) => {
        setConfirmDeleteModal(!confirmDeleteModal);
    }

    return (
        <div key={comment?.id}>
            <div className="comment-container">
                    <div className="comment-user">{comment.commentOwner}</div>
                    <li key={comment.id} className="comment">
                        {comment.commentBody}
                        <EditCommentModal props={{ comment }} />
                        {confirmDeleteModal &&
                            <div className="confirm-delete-container">
                                <div className="confirm-delete-sentence">Confirm Delete</div>
                                <button className='confirm-delete-button' onClick={() => handleDelete(comment.songId, comment.id)}>Confirm</button>
                            </div>
                        }
                        {comment.userId === sessionUser.id && <button
                            onClick={() =>
                                confirmDelete(comment)
                            }
                            className="delete-comment-button"
                        >
                            delete
                        </button>}
                    </li>
                    <div className="comment-buttons"></div>
                </div>
        </div>
    );
};

export default ViewComment;
