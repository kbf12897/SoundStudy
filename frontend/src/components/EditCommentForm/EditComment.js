import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editComment } from "../../store/comments";
import "./EditCommentModal.css";

function EditComment({ props, modalClose }) {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const commentOwner = sessionUser.username;
    const { songId } = useParams();
    const userId = sessionUser.id;
    const commentId = props.id;

    const [commentBody, setCommentBody] = useState(props.commentBody);

    //edit comment handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            commentId,
            userId,
            songId,
            commentBody,
            commentOwner
        };

        dispatch(editComment(payload));
        return modalClose.setShowModal(false);
    };

    return (
        <form className="edit-comment-form" onSubmit={handleSubmit}>
            <h3>Edit comment</h3>
            <label>Comment</label>
            <input
                className="edit-comment"
                type="text"
                value={commentBody}
                onChange={(e) => setCommentBody(e.target.value)}
                required
            />
            <button className="edit-comment-button" type="submit">
                Edit comment
            </button>
        </form>
    );
}

export default EditComment;
