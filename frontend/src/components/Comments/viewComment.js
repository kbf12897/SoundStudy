import { useState } from "react";
import EditComment from "../EditCommentForm/EditComment";
import { deleteComment } from "../../store/comments";
import { useDispatch } from "react-redux";
import EditCommentModal from "../EditCommentForm";
import './Comments.css';

const ViewComment = ({ comment }) => {
    const dispatch = useDispatch();
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)

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

    return (
        <div key={comment?.id}>
            <div className="comment-container">
                    <div className="comment-user">{comment.commentOwner}</div>
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
        </div>
    );
};

export default ViewComment;
